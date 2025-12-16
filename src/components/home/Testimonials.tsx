import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechVentures India",
    company: "TechVentures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Pixel Propx transformed our entire digital infrastructure. Their AI automation solutions reduced our operational costs by 60% and the team's expertise is unmatched.",
    rating: 5,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder, HealthFirst",
    company: "HealthFirst",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "The mobile app they built for us has over 100K downloads and counting. The team's attention to detail and user experience design is exceptional.",
    rating: 5,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Managing Director, RetailMax",
    company: "RetailMax",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Dristi Docs revolutionized our billing process. What used to take hours now takes minutes. The GST compliance features are a game-changer for our business.",
    rating: 5,
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "CTO, EduLearn Platform",
    company: "EduLearn",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Their full-stack development team delivered our e-learning platform 2 weeks ahead of schedule. The quality and scalability exceeded all our expectations.",
    rating: 5,
    gradient: "from-green-500 to-emerald-500"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-2xl rotate-12"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 border border-accent-foreground/20 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Trusted by Industry
            <span className="block gradient-text mt-2">Leaders & Innovators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 md:p-12 rounded-3xl bg-card/80 backdrop-blur-lg border border-border/50 shadow-2xl"
          >
            {/* Quote Icon */}
            <div className={`absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br ${testimonials[activeIndex].gradient} flex items-center justify-center`}>
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
              {/* Image Section */}
              <div className="relative mx-auto md:mx-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].gradient} rounded-2xl blur-xl opacity-30`} />
                <div className="relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl border-2 border-border"
                  />
                  {/* Company Badge */}
                  <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-card border border-border rounded-xl shadow-lg">
                    <span className="text-sm font-semibold gradient-text">{testimonials[activeIndex].company}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-xl font-semibold font-display">{testimonials[activeIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-primary' : 'w-3 bg-border hover:bg-muted'
                }`}
              >
                {index === activeIndex && (
                  <motion.div
                    layoutId="activeTestimonial"
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-1 rounded-xl transition-all duration-300 ${
                  index === activeIndex 
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' 
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 object-cover rounded-lg"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
