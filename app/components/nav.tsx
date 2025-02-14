"use client";

import Link from 'next/link'
import SunIcon from './icons/Sun'
import { useEffect, useState } from 'react';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about-me': {
    name: 'sobre',
  },
  '/work-experience': {
    name: 'experência',
  },
  '/blog': {
    name: 'blog',
  }
}

export function Navbar() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Ensure we only access `window` in the client-side
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 640);
    };

    checkScreenSize(); // Run once on mount to set initial value

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  return (
    <aside className="-ml-[8px] mb-5 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-center sm:justify-between"
          id="nav"
        >
          <div className="flex flex-row">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-[14px] sm:text-[16px]"
                >
                  {name}
                </Link>
              )
            })}
            <div className='align-middle py-1 px-2 m-1 cursor-pointer flex gap-5 flex-row text-[14px] sm:text-[16px]'>
              <span className="font-bold ">EN</span>
              <SunIcon isDesktop={isDesktop} />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
