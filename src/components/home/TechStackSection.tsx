const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
];

export const TechStackSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Technology Stack</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Powered by <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We use cutting-edge technologies to build scalable, performant, and future-proof solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
