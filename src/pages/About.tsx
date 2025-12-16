import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We build lasting relationships through exceptional service.',
  },
  {
    icon: Award,
    title: 'Quality Driven',
    description: 'We never compromise on quality. Every project meets the highest standards of excellence.',
  },
  {
    icon: Rocket,
    title: 'Agile Approach',
    description: 'Flexible, iterative development ensures we deliver value quickly and adapt to changes.',
  },
];

const team = [
  {
    name: 'Founder & CEO',
    role: 'Visionary Leader',
    description: 'Driving innovation and strategic growth',
  },
  {
    name: 'Tech Lead',
    role: 'Technology Expert',
    description: 'Architecture and technical excellence',
  },
  {
    name: 'Design Lead',
    role: 'Creative Director',
    description: 'Crafting beautiful user experiences',
  },
  {
    name: 'Operations Head',
    role: 'Business Operations',
    description: 'Ensuring smooth project delivery',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Building the <span className="gradient-text">Future of Tech</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of developers, designers, and innovators dedicated to 
              transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground">
                From Vision to <span className="gradient-text">Reality</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pixel Propx Solutions was founded with a simple yet powerful mission: to help 
                  businesses harness the power of technology to achieve their goals. As a startup, 
                  we understand the challenges of building something from the ground up.
                </p>
                <p>
                  Our journey began with a small team of passionate developers who believed that 
                  great technology should be accessible to everyone. Today, we've grown into a 
                  full-service digital agency, but our core values remain the same.
                </p>
                <p>
                  We specialize in web development, mobile apps, AI solutions, and custom software, 
                  and we're proud to have created Vyapar Drishti – our flagship product that helps 
                  Indian businesses manage their billing and inventory with ease.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
                { value: '15+', label: 'Team Members' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses of all sizes with innovative, reliable, and scalable 
                technology solutions that drive growth and create lasting value. We aim to be 
                the trusted technology partner that helps our clients succeed in the digital age.
              </p>
            </div>

            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be recognized as a leading technology company that transforms ideas into 
                digital reality. We envision a future where every business, regardless of size, 
                has access to world-class technology solutions that propel them to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              What <span className="gradient-text">Drives Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values guide everything we do, from how we work with clients to how we build our products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A dedicated team of professionals committed to delivering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Ready to start your project? We'd love to hear from you.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get in Touch
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

export default About;
