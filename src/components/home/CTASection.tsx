import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from './../ui/button';

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          {/* Glow Effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-[100px]" />

          <div className="relative z-10 py-20 px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Ready to Transform Your
              <span className="gradient-text block mt-2">Digital Presence?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's discuss your project and explore how we can help you achieve your business goals 
              with our innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/contact">
                  <MessageSquare className="w-5 h-5" />
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
