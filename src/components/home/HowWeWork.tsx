import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description: "We start by understanding your vision, goals, and challenges through in-depth discussions.",
    details: ["Requirement gathering", "Market analysis", "Feasibility study", "Project scope definition"],
    color: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our experts craft a detailed roadmap with clear milestones and deliverables.",
    details: ["Technical architecture", "UI/UX wireframes", "Timeline planning", "Resource allocation"],
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=600&h=400&fit=crop"
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Design",
    description: "We bring your vision to life using cutting-edge technologies and best practices.",
    details: ["Agile development", "Regular updates", "Quality assurance", "Security implementation"],
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support for your success.",
    details: ["Deployment support", "Performance monitoring", "Training sessions", "24/7 maintenance"],
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
  }
];

export const HowWeWork = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="url(#gradient1)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent-foreground))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            How We Transform
            <span className="block gradient-text mt-2">Ideas Into Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process ensures every project is delivered with excellence, on time, and within budget.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2 lg:text-left' : ''}`}>
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-4`}
                  >
                    <span className={`text-6xl md:text-7xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-50`}>
                      {step.number}
                    </span>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <CheckCircle2 className={`w-5 h-5 text-transparent bg-gradient-to-br ${step.color} bg-clip-text`} 
                          style={{ color: index === 0 ? '#06b6d4' : index === 1 ? '#a855f7' : index === 2 ? '#f97316' : '#22c55e' }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Image Side */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Image Container */}
                  <div className="relative rounded-3xl overflow-hidden border border-border/50">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-20`} />
                    
                    {/* Step Badge */}
                    <div className="absolute bottom-4 left-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50">
                      <span className="text-sm font-semibold">Step {step.number}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Center Dot (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} ring-4 ring-background shadow-lg`}
                  />
                </div>

                {/* Arrow to Next (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent-foreground text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
