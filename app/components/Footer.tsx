'use client'; // Required if you use hooks for hydration fixing

import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  // Use useEffect to set the year only on the client side
  // This prevents hydration errors between server and client
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='border-t border-border py-12 bg-background'>
      <div className='275 mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <p className='text-sm text-muted-foreground'>
            © {year || '2026'} Gopi. All rights reserved.
          </p>
          <p className='text-xs text-muted-foreground/60'>
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
