import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Bot, Code, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web Development',
    subtitle: 'Stunning Digital Experiences',
    description: 'We create responsive, high-performance websites and web applications that captivate users and drive business results. From simple landing pages to complex enterprise solutions.',
    features: [
      'Custom Website Design & Development',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'Content Management Systems',
      'Web Application Development',
      'API Integration & Development',
      'Performance Optimization',
      'SEO-Friendly Architecture',
    ],
    // technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'WordPress', 'Shopify'],
    technologies:[],
    color: 'from-primary to-cyan-400',
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'App Development',
    subtitle: 'Mobile-First Solutions',
    description: 'Build native and cross-platform mobile applications that users love. We focus on intuitive design, seamless performance, and engaging user experiences across iOS and Android.',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-Platform Apps',
      'UI/UX Design for Mobile',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'App Maintenance & Support',
    ],
    // technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    technologies:[],
    color: 'from-accent to-pink-500',
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI & Automation',
    subtitle: 'Intelligent Solutions',
    description: 'Leverage the power of artificial intelligence and automation to streamline operations, enhance customer experiences, and gain valuable business insights.',
    features: [
      'Custom AI Chatbots',
      'Process Automation',
      'Machine Learning Integration',
      'Natural Language Processing',
      'Predictive Analytics',
      'Computer Vision Solutions',
      'Workflow Automation',
      'Data Analysis & Insights',
    ],
    // technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'Zapier', 'n8n'],
    technologies:[],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'software',
    icon: Code,
    title: 'Software Development',
    subtitle: 'Custom Solutions',
    description: 'Tailor-made software solutions designed to address your unique business challenges. From concept to deployment, we build scalable and maintainable systems.',
    features: [
      'Custom Software Development',
      'Enterprise Solutions',
      'SaaS Product Development',
      'Legacy System Modernization',
      'Cloud Migration',
      'Database Design & Optimization',
      'DevOps & CI/CD',
      'Ongoing Maintenance & Support',
    ],
    // technologies: ['Python', 'Java', '.NET', 'Go', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
    technologies:[],
    color: 'from-orange-500 to-amber-400',
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From web and mobile development to AI-powered automation, we offer end-to-end 
              services to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={cn(
                'py-20 border-t border-border',
                index === services.length - 1 && 'border-b'
              )}
            >
              <div className={cn(
                'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center',
                index % 2 === 1 && 'lg:[direction:rtl]'
              )}>
                {/* Content */}
                <div className="lg:[direction:ltr]">
                  <div className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br',
                    service.color
                  )}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <span className="text-muted-foreground text-sm">{service.subtitle}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  {service.technologies && <div className="flex flex-wrap gap-2 mb-8">
                    {service?.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>}

                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Features */}
                <div className="lg:[direction:ltr]">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                      >
                        <div className={cn(
                          'w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br',
                          service.color
                        )}>
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's have a conversation about your project requirements and find the perfect solution together.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
