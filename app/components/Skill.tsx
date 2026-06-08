export default function Skills() {
  const skillGroups = [
    { title: 'Languages', tags: ['JavaScript ES6+', 'TypeScript', 'Java'] },
    {
      title: 'Frontend',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5 / CSS3'],
    },
    {
      title: 'Backend',
      tags: ['Node.js', 'Express.js', 'REST APIs', 'Edge Functions'],
    },
    { title: 'Databases', tags: ['PostgreSQL', 'MySQL', 'Supabase', 'Redis'] },
    {
      title: 'Cloud & DevOps',
      tags: ['Vercel', 'Docker', 'Git & GitHub', 'CI/CD'],
    },
    {
      title: 'AI & APIs',
      tags: ['OpenAI API', 'Prompt Engineering', 'AI Orchestration'],
    },
  ];

  return (
    <section id='skills' className='py-24 px-[5vw] bg-bg-dark-200 mt-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-[11px] tracking-widest uppercase text-brand-green font-medium mb-3'>
          Technical skills
        </div>
        <h2 className='font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-14'>
          The stack I work with
          <br />
          every <span className='text-brand-green'>day</span>.
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className='bg-bg-dark-300 border border-border-dim rounded-2xl p-6 transition-all duration-200 hover:border-brand-green/20 hover:-translate-y-0.5'
            >
              <div className='text-[11px] tracking-wider uppercase text-brand-green font-medium mb-4'>
                {group.title}
              </div>
              <div className='flex flex-wrap gap-2'>
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-white/5 border border-border-dim text-text-secondary text-xs px-3 py-1 rounded-full transition-all duration-200 hover:bg-brand-green/10 hover:border-brand-green/30 hover:text-brand-green'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
