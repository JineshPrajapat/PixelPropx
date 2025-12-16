import { Link } from 'react-router-dom';
import { Globe, Smartphone, Bot, Code, ArrowRight } from 'lucide-react';
import { cn } from './../../lib/utils';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Stunning, responsive websites and web applications built with modern technologies for optimal performance.',
    // features: ['React & Next.js', 'E-commerce', 'Custom CMS', 'Progressive Web Apps'],
    features:[],
    color: 'from-primary to-cyan-400',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    // features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    features:[],
    color: 'from-accent to-pink-500',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions powered by cutting-edge AI and machine learning technologies.',
    // features: ['Chatbots', 'Process Automation', 'ML Integration', 'Data Analytics'],
    features:[],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from concept to deployment.',
    // features: ['Enterprise Solutions', 'API Development', 'Cloud Services', 'DevOps'],
    features:[],
    color: 'from-orange-500 to-amber-400',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Solutions That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive digital services to help your business thrive in the modern landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Glow on Hover */}
              <div className={cn(
                'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br',
                service.color
              )} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br',
                  service.color
                )}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
