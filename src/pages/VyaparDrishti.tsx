import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { 
  FileText, Receipt, Package, BarChart3, Shield, Zap, 
  Users, Clock, Globe, Download, Check, ArrowRight, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Receipt,
    title: 'GST & Non-GST Billing',
    description: 'Generate compliant invoices with automatic GST calculations or create simple non-GST bills.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Track stock levels, manage products, and get low-stock alerts in real-time.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain insights with detailed reports on sales, purchases, and business performance.',
  },
  {
    icon: Users,
    title: 'Multi-User Access',
    description: 'Collaborate with your team with role-based access and permissions.',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Bank-grade security with regular backups and GST compliance built-in.',
  },
  {
    icon: Clock,
    title: 'Quick Invoicing',
    description: 'Create professional invoices in seconds with customizable templates.',
  },
  {
    icon: Globe,
    title: 'Cloud-Based',
    description: 'Access your data from anywhere, on any device, at any time.',
  },
  {
    icon: Download,
    title: 'Export Options',
    description: 'Export reports in PDF, Excel, and other formats for easy sharing.',
  },
];

const plans = [
  {
    name: 'Starter',
    price: '₹499',
    period: '/month',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Up to 100 invoices/month',
      'Basic inventory tracking',
      'Email support',
      '1 user account',
      'Standard reports',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹999',
    period: '/month',
    description: 'Ideal for growing businesses with more needs',
    features: [
      'Unlimited invoices',
      'Advanced inventory management',
      'Priority support',
      'Up to 5 user accounts',
      'Advanced analytics',
      'Custom invoice templates',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Unlimited users',
      'Dedicated support',
      'Custom integrations',
      'On-premise deployment',
      'SLA guarantee',
      'Training sessions',
    ],
    popular: false,
  },
];

const VyaparDrishti = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Smart Business Management</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Vyapar Drishti</span>
              <span className="block text-foreground mt-2">Billing & Inventory Made Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              The all-in-one GST/Non-GST billing and inventory management system designed 
              specifically for Indian businesses. Simple, powerful, compliant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Everything You Need to <span className="gradient-text">Run Your Business</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Powerful features designed to streamline your billing and inventory operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  'relative p-8 rounded-2xl border transition-all duration-300',
                  plan.popular
                    ? 'bg-card border-primary scale-105 shadow-xl shadow-primary/10'
                    : 'bg-card border-border hover:border-primary/50'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'hero' : 'outline'}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Simplify Your Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join hundred of businesses already using Vyapar Drishti to manage their billing and inventory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link to="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VyaparDrishti;
