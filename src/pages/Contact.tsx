import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'pixelpropxsolutions@gmail.com',
    link: 'mailto:pixelpropxsolutions@gmail.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91-6367097548',
    link: 'tel:+91-6367097548',
  },
  // {
  //   icon: MapPin,
  //   title: 'Location',
  //   value: 'Rajsamand,India',
  //   link: '#',
  // },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9AM - 6PM IST',
    link: '#',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', company: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Get in touch with us 
              and let's discuss how we can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground">Send us a Message</h2>
                    <p className="text-sm text-muted-foreground">Fill out the form and we'll be in touch</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-lg bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="app">App Development</option>
                        <option value="ai">AI & Automation</option>
                        <option value="software">Software Development</option>
                        <option value="dristi">Dristi Docs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Quick Response Note */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="font-display font-semibold text-foreground mb-2">Quick Response Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours. For urgent matters, 
                  please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-3 months.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes, we offer various maintenance and support packages to ensure your project runs smoothly after launch.',
              },
              {
                q: 'What technologies do you work with?',
                a: 'We work with modern technologies including React, Node.js, Python, Flutter, and various AI/ML frameworks.',
              },
              {
                q: 'How do you handle project pricing?',
                a: 'We provide custom quotes based on your specific requirements after an initial consultation.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
