export default function ContentCreation() {
  return (
    <section id="content" className="py-24 px-[5vw]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[11px] tracking-widest uppercase text-brand-green font-medium mb-3">Content creation</div>
        <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-2">
          I build in <span className="text-brand-green">public</span>.
        </h2>
        <p className="text-sm text-text-secondary font-light max-w-md mb-14">Every project I work on gets documented. The whole process — from idea to deployed product.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* YouTube Card */}
          <div className="bg-bg-dark-300 border border-border-dim rounded-2xl p-7 transition-colors duration-200 hover:border-border-bright">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium px-3 py-1 rounded-full mb-4 bg-red-500/10 text-red-400 border border-red-500/20">
              ▶ YouTube
            </span>
            <h3 className="font-syne text-lg font-semibold text-text-primary mb-2.5">Planly Build Series</h3>
            <p className="text-sm text-text-secondary leading-relaxed">A public video series documenting the complete build of Planly — from blank repo to a live AI SaaS product. Architecture decisions, coding sessions, deployment, and everything in between.</p>
            <div className="flex gap-5 mt-5">
              <div className="text-xs text-text-muted">Day 1<strong className="block text-lg font-syne font-semibold text-text-primary mt-1">Live & published</strong></div>
              <div className="text-xs text-text-muted">Full series<strong className="block text-lg font-syne font-semibold text-text-primary mt-1">Ongoing</strong></div>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-bg-dark-300 border border-border-dim rounded-2xl p-7 transition-colors duration-200 hover:border-border-bright">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium px-3 py-1 rounded-full mb-4 bg-brand-amber/10 text-brand-amber border border-brand-amber/20">
              ◈ Instagram
            </span>
            <h3 className="font-syne text-lg font-semibold text-text-primary mb-2.5">Short-form Dev Content</h3>
            <p className="text-sm text-text-secondary leading-relaxed">Quick Reels and carousels covering React tips, Node.js patterns, system design concepts, and developer productivity. Bite-sized content for student developers — same audience, different format.</p>
            <div className="flex gap-5 mt-5">
              <div className="text-xs text-text-muted">Focus<strong className="block text-lg font-syne font-semibold text-text-primary mt-1">Student devs</strong></div>
              <div className="text-xs text-text-muted">Format<strong className="block text-lg font-syne font-semibold text-text-primary mt-1">Reels + carousels</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}