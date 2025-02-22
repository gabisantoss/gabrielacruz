"use client";

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import SunIcon from '@/components/icons/Sun'
import MoonIcon from '@/components/icons/Moon';
import { useEffect, useState } from 'react';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Navbar() {
  const t = useTranslations("Navbar");

  const [isDesktop, setIsDesktop] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };


  return (
    <aside className="-ml-[8px] mb-5 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="text-black dark:text-gray-200 px-5 flex flex-wrap flex-row relative sm:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-center sm:justify-between"
          id="nav"
        >
          <div className="flex flex-wrap sm:flex-nowrap flex-row">
            <Link
              key="{t('home')}"
              href='/'
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-[14px] sm:text-[16px] lowercase"
            >
              {t('home')}
            </Link>
            <Link
              key="about"
              href='/about'
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-[14px] sm:text-[16px] lowercase"
            >
              {t('about')}
            </Link>
            <Link
              key="experience"
              href='/experience'
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-[14px] sm:text-[16px] lowercase"
            >
              {t('experience')}
            </Link>
            <Link
              key="blog"
              href='/blog'
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-[14px] sm:text-[16px] lowercase"
            >
              {t('blog')}
            </Link>

            <div className='align-middle sm:px-2 m-0 sm:m-1 mt-2 cursor-pointer flex gap-5 flex-row text-[14px] sm:text-[16px] items-center'>
              <LocaleSwitcher />
              {theme === "light" ? (
                <SunIcon isDesktop={isDesktop} onClick={toggleTheme} />
              ) : (
                <MoonIcon isDesktop={isDesktop} onClick={toggleTheme} />
              )}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
