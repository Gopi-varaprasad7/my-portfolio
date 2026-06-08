export default function Projects() {
  const portfolio = [
    {
      title: "Planly",
      icon: "🧠",
      featured: true,
      desc: "AI-powered SaaS platform that generates personalized 30/60/90-day learning roadmaps with automated task decomposition and real-time progress tracking. Multi-tenant architecture with Supabase Auth and Row Level Security.",
      stack: ["React", "Node.js", "PostgreSQL", "Supabase", "OpenAI API", "Edge Functions"],
      live: "https://app.gopikoduri.com",
      git: "https://github.com/Gopi-varaprasad7"
    },
    {
      title: "EventFlow",
      icon: "⚡",
      featured: false,
      desc: "High-throughput event registration system engineered to handle 500 registrations/minute and 10,000 concurrent users. Microservices architecture with Redis-backed queuing and full Docker containerization.",
      stack: ["Next.js", "Docker", "Redis", "Microservices", "Tailwind CSS"],
      live: "https://gopikoduri.com",
      git: "https://github.com/Gopi-varaprasad7"
    }
  ];

  return (
    <section id="projects" className="py-24 px-[5vw] bg-bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-[11px] tracking-widest uppercase text-brand-green font-medium mb-3">Projects</div>
        <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-2">
          Things I've <span className="text-brand-green">built</span>.
        </h2>
        <p className="text-sm text-text-secondary font-light max-w-md mb-14">Real products, real infrastructure, real users — not todo apps.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((project, i) => (
            <div 
              key={i} 
              className={`bg-bg-dark-300 border rounded-2xl p-7 flex flex-col transition-all duration-200 hover:-translate-y-1 relative overflow-hidden ${
                project.featured 
                  ? "border-brand-green/20 bg-gradient-to-br from-bg-dark-200 to-[#0a1a12]" 
                  : "border-border-dim hover:border-brand-green/30"
              }`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] tracking-wider text-brand-green font-semibold bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-full">
                  FEATURED
                </span>
              )}
              
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/15 flex items-center justify-center text-xl mb-5">
                {project.icon}
              </div>
              
              <h3 className="font-syne text-xl font-semibold text-text-primary mb-2 tracking-tight">{project.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">{project.desc}</p>
              
              <div className="flex flex-wrap gap-1.5 my-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-[11px] px-2.5 py-0.5 bg-white/5 border border-border-dim text-text-muted rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs text-text-secondary flex items-center gap-1.5 transition-colors duration-200 hover:text-brand-green">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live app
                </a>
                <a href={project.git} target="_blank" rel="noopener noreferrer" className="text-xs text-text-secondary flex items-center gap-1.5 transition-colors duration-200 hover:text-brand-green">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}