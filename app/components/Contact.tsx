export default function Contact() {
  return (
    <section id="contact" className="py-24 px-[5vw] bg-bg-dark-200">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-[11px] tracking-widest uppercase text-brand-green font-medium mb-3">Get in touch</div>
        <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight">
          Let's build<br />something <span className="text-brand-green">great</span>.
        </h2>
        <p className="text-sm text-text-secondary font-light mt-2 mb-10">Open to SDE roles, freelance projects, and interesting collaborations.</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="mailto:kodurigopi9@gmail.com" className="flex items-center gap-2.5 bg-brand-green text-bg-dark-100 font-medium text-sm px-6 py-3 rounded-xl transition-opacity duration-200 hover:opacity-90">
            kodurigopi9@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/gopi-varaprasad-koduri-3034b5252/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-bg-dark-300 border border-border-dim text-text-secondary text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:border-brand-green hover:text-brand-green hover:-translate-y-0.5">
            LinkedIn
          </a>
          <a href="https://github.com/Gopi-varaprasad7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-bg-dark-300 border border-border-dim text-text-secondary text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:border-brand-green hover:text-brand-green hover:-translate-y-0.5">
            GitHub
          </a>
          <a href="https://app.gopikoduri.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-bg-dark-300 border border-border-dim text-text-secondary text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:border-brand-green hover:text-brand-green hover:-translate-y-0.5">
            Planly ↗
          </a>
        </div>
      </div>
    </section>
  );
}