export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-[5vw] pt-28 pb-20 relative overflow-hidden">
      {/* Decorative Blur Ambient Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-radial from-brand-green/5 to-transparent top-[-100px] right-[-100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-template-cols lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center max-w7xl mx-auto w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-3.5 py-1.5 text-xs text-brand-green mb-7">
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse-slow" />
            Available for opportunities
          </div>
          
          <h1 className="font-syne text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] text-text-primary">
            Building products<br />that <em className="text-brand-green not-italic">actually</em><br />ship.
          </h1>
          
          <p className="text-lg text-text-secondary font-light max-w-lg mt-5 leading-relaxed">
            Full Stack Developer focused on AI-integrated web platforms. I turn ideas into production-grade software — fast, scalable, and built to last.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#projects" className="bg-brand-green text-bg-dark-100 font-medium text-sm px-7 py-3 rounded-lg transition-all inline-flex items-center gap-2 group hover:opacity-90 hover:-translate-y-0.5">
              View my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="/resume.pdf" className="border border-border-bright text-text-primary text-sm px-7 py-3 rounded-lg transition-all inline-flex items-center gap-2 hover:border-brand-green hover:-translate-y-0.5">
              Download Resume
            </a>
          </div>
          
          <div className="flex gap-9 mt-14">
            <div>
              <div className="font-syne text-3xl font-bold text-text-primary leading-none">1+</div>
              <div className="text-[11px] text-text-muted mt-1 tracking-wider uppercase">Year production exp</div>
            </div>
            <div>
              <div className="font-syne text-3xl font-bold text-text-primary leading-none">5+</div>
              <div className="text-[11px] text-text-muted mt-1 tracking-wider uppercase">Features shipped</div>
            </div>
            <div>
              <div className="font-syne text-3xl font-bold text-text-primary leading-none">2</div>
              <div className="text-[11px] text-text-muted mt-1 tracking-wider uppercase">SaaS platforms built</div>
            </div>
          </div>
        </div>

        {/* Code Execution Card Visual */}
        <div className="bg-bg-dark-300 border border-border-dim rounded-2xl p-8 relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-brand-green/15 before:to-transparent before:pointer-events-none animate-fade-up [animation-delay:0.2s]">
          <div className="font-mono text-xs text-text-secondary space-y-2 leading-relaxed">
            <p className="text-text-muted italic">planly/api/roadmap.ts</p>
            <p><span className="text-[#C792EA]">export async function</span> <span className="text-[#82AAFF]">generateRoadmap</span>(</p>
            <p>&nbsp;&nbsp;user: <span className="text-[#82AAFF]">UserContext</span></p>
            <p>) &#123;</p>
            <p>&nbsp;&nbsp;<span className="text-[#C792EA]">const</span> plan = <span className="text-[#C792EA]">await</span> <span className="text-[#82AAFF]">openai</span>.chat(&#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;model: <span className="text-brand-green">gpt-4o&quot;</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;system: <span className="text-[#82AAFF]">buildPrompt</span>(user),</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;duration: <span className="text-brand-amber">90-day</span>,</p>
            <p>&nbsp;&nbsp;&#125;)</p>
            <p>&nbsp;&nbsp;<span className="text-[#C792EA]">return</span> <span className="text-[#82AAFF]">decomposeTasks</span>(plan)</p>
            <p>&#125;</p>
          </div>
          <div className="mt-5 pt-5 border-t border-white/5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse-slow" />
              <span className="text-xs text-text-muted">Deployed on Vercel · Edge Functions active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}