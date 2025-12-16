import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award, Clock, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest tech stack to build scalable, future-proof solutions that keep you ahead of the competition.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data security is our priority. We implement robust security measures and follow industry best practices.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of seasoned developers, designers, and strategists bring years of experience to every project.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "With 50+ successful projects delivered, we have the expertise to turn your vision into reality.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines. Our agile methodology ensures your project is delivered on schedule, every time.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "We don't just build and leave. Our dedicated support team is always available to help you succeed.",
    gradient: "from-pink-500 to-rose-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

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
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Building Digital Excellence
            <span className="block gradient-text mt-2">One Project at a Time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to deliver solutions that transform businesses and create lasting impact.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient Glow on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${reason.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold font-display mb-3 group-hover:gradient-text transition-all duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom Line Animation */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${reason.gradient} rounded-b-2xl transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "99%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};
