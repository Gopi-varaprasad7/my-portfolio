export default function Experience() {
  const history = [
    {
      date: 'Jan 2025 — Dec 2025',
      role: 'Associate Software Engineer',
      company: 'Fitniti',
      desc: "Delivered 5+ production-ready features for Fitniti's fitness web platform. Built and maintained responsive React components, implemented secure RESTful APIs with MySQL, and collaborated closely with UI/UX designers to convert Figma mockups into pixel-perfect interfaces — reducing design-to-dev turnaround by 30%.",
      tags: [
        'React.js',
        'Tailwind CSS',
        'Node.js',
        'MySQL',
        'REST APIs',
        'Figma',
      ],
    },
    {
      date: '2020 — 2024',
      role: 'B.Tech — Computer Science & Engineering',
      company: 'Sree Rama Engineering College, Tirupati',
      desc: 'Graduated with strong foundation in algorithms, data structures, and software engineering. Awarded Best Innovative Idea by APSCHE (Andhra Pradesh State Council of Higher Education) — recognized at state level for technical innovation during this period.',
      tags: ['DSA', 'System Design', 'APSCHE Award'],
    },
  ];

  return (
    <section id='experience' className='py-24 px-[5vw]'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-[11px] tracking-widest uppercase text-brand-green font-medium mb-3'>
          Experience
        </div>
        <h2 className='font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-14'>
          Where I&apos;ve <span className='text-brand-green'>shipped</span>.
        </h2>

        <div className='flex flex-col gap-6'>
          {history.map((job, i) => (
            <div
              key={i}
              className='bg-bg-dark-300 border border-border-dim rounded-2xl p-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 transition-colors duration-200 hover:border-border-bright'
            >
              <div className='text-xs text-text-muted font-normal pt-1'>
                {job.date}
              </div>
              <div>
                <div className='font-syne text-xl font-semibold text-text-primary'>
                  {job.role}
                </div>
                <div className='text-sm text-brand-green mt-1 mb-3'>
                  {job.company}
                </div>
                <p className='text-sm text-text-secondary leading-relaxed'>
                  {job.desc}
                </p>
                <div className='flex flex-wrap gap-2 mt-4'>
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className='bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-xs px-2.5 py-0.5 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
