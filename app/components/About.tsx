export default function About() {
  const traits = [
    {
      icon: '🏗️',
      title: 'Production-first mindset',
      desc: 'Everything I build ships. No toy projects — real users, real infrastructure.',
    },
    {
      icon: '🤖',
      title: 'AI integration specialist',
      desc: 'OpenAI API, prompt engineering, serverless orchestration — I build AI features end to end.',
    },
    {
      icon: '📹',
      title: 'Public builder',
      desc: 'I document every product build on YouTube and Instagram. Transparency is my differentiator.',
    },
    {
      icon: '📐',
      title: 'System design learner',
      desc: 'Actively studying distributed systems, scalability patterns, and AWS for SDE interviews.',
    },
  ];

  return (
    <section id='about' className='py-24 px-[5vw]'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-[11px] tracking-widest uppercase text-brand-green font-medium mb-3'>
          About me
        </div>
        <h2 className='font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-4'>
          I don&apos;t just write code.
          <br />I ship <span className='text-brand-green'>products</span>.
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start mt-14'>
          <div className='text-text-secondary font-light space-y-5 leading-relaxed text-base'>
            <p>
              I'm Gopi — a Full Stack Developer from Hyderabad with{' '}
              <strong>1 year of production experience</strong> at Fitniti, where
              I built and shipped real features used by real users every day.
            </p>
            <p>
              I built <strong>Planly</strong>, an AI-powered SaaS platform that
              generates personalized 30/60/90-day learning roadmaps using
              OpenAI, Supabase, and serverless edge functions — fully deployed
              and live at <strong>app.gopikoduri.com</strong>.
            </p>
            <p>
              Outside of code, I document everything I build on{' '}
              <strong>YouTube and Instagram</strong> — making the full process
              of shipping software public for other developers to learn from.
            </p>
            <p>
              Currently preparing for{' '}
              <strong>SDE roles at top product companies</strong>, deepening
              expertise in system design, DSA, and cloud-native architecture.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            {traits.map((trait, i) => (
              <div
                key={i}
                className='bg-bg-dark-300 border border-border-dim rounded-xl p-5 flex items-start gap-4 transition-colors duration-200 hover:border-border-bright'
              >
                <div className='w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-lg shrink-0'>
                  {trait.icon}
                </div>
                <div>
                  <h4 className='text-sm font-medium text-text-primary mb-1'>
                    {trait.title}
                  </h4>
                  <p className='text-xs text-text-secondary leading-relaxed'>
                    {trait.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
