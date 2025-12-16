import { Link } from 'react-router-dom';
import { FileText, BarChart3, Receipt, Package, Shield, Zap, ArrowRight, Check } from 'lucide-react';
import { Button } from './../ui/button';

const features = [
  { icon: Receipt, text: 'GST & Non-GST Invoicing' },
  { icon: Package, text: 'Inventory Management' },
  { icon: BarChart3, text: 'Real-time Analytics' },
  { icon: Shield, text: 'Secure & Compliant' },
  { icon: Zap, text: 'Lightning Fast' },
  { icon: FileText, text: 'Multiple Report Formats' },
];

export const ProductSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Our Product
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Vyapar Drishti</span>
              <span className="block text-foreground mt-2">Smart Billing & Inventory</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Streamline your business operations with our comprehensive GST/Non-GST billing 
              and inventory management system. Built for Indian businesses, designed for growth.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://vyapar-drishti.vercel.app" target='_blank'>
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border bg-card p-6">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">Vyapar Drishti</div>
                      <div className="text-xs text-muted-foreground">Dashboard</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                    Active
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Invoices', value: '1,234', change: '+12%' },
                    { label: 'Revenue', value: '₹4.5L', change: '+8%' },
                    { label: 'Items', value: '856', change: '+5%' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-secondary">
                      <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                      <div className="font-display font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-emerald-400">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-muted-foreground">Recent Invoices</div>
                  {[
                    { id: 'INV-001', client: 'ABC Corp', amount: '₹12,500' },
                    { id: 'INV-002', client: 'XYZ Ltd', amount: '₹8,750' },
                    { id: 'INV-003', client: 'Tech Co', amount: '₹23,000' },
                  ].map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{invoice.id}</div>
                          <div className="text-xs text-muted-foreground">{invoice.client}</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-foreground">{invoice.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
