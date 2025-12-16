import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce solution with payment integration, inventory management, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "App Development",
    description: "A telemedicine app connecting patients with doctors, featuring video consultations and prescription management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "WebRTC"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "AI Customer Support Bot",
    category: "AI & Automation",
    description: "An intelligent chatbot that reduced customer support tickets by 70% using natural language processing.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenAI", "FastAPI"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Inventory Management System",
    category: "Software Development",
    description: "Enterprise-grade inventory system with real-time tracking, automated reordering, and comprehensive reporting.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Fintech Dashboard",
    category: "Web Development",
    description: "A comprehensive financial dashboard with real-time market data, portfolio tracking, and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "D3.js", "AWS"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 6,
    title: "Smart Home Automation",
    category: "IoT & Automation",
    description: "IoT-based home automation system with voice control, energy monitoring, and predictive maintenance.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    technologies: ["Python", "MQTT", "React", "Raspberry Pi"],
    color: "from-pink-500 to-rose-500"
  }
];

const categories = ["All", "Web Development", "App Development", "AI & Automation", "Software Development", "IoT & Automation"];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Projects That
              <span className="block gradient-text mt-2">Speak for Themselves</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our diverse portfolio of successful projects across various industries and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card border border-border hover:border-primary/50 text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent-foreground/20 border border-border/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <a href="/contact">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
