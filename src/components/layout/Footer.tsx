import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', path: '/services#web' },
    { name: 'App Development', path: '/services#app' },
    { name: 'AI & Automation', path: '/services#ai' },
    { name: 'Software Development', path: '/services#software' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    // { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ],
  products: [
    { name: 'Vyapar Drishti', path: '/vyapar-drishti' },
    { name: 'Features', path: '/vyapar-drishti#features' },
    // { name: 'Pricing', path: '/vyapar-drishti#pricing' },
    { name: 'Demo', path: '/vyapar-drishti#demo' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/PixelPropX', label: 'Twitter' },
  // { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-primary-foreground text-lg">
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Pixel<span className="gradient-text">Propx</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming ideas into digital reality. We build innovative solutions that drive business growth and enhance user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info & Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
            <a href="mailto:pixelpropxsolutions@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} />
              pixelpropxsolutions@gmail.com
            </a>
            <a href="tel:+91-6367097548" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} />
              +91-6367097548
            </a>
            {/* <span className="flex items-center gap-2">
              <MapPin size={16} />
              India
            </span> */}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pixel Propx Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
