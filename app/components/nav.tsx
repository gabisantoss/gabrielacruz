import Link from 'next/link'

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
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
            <span className="font-bold align-middle py-1 px-2 m-1 cursor-pointer">EN</span>
          </div>
        </nav>
      </div>
    </aside>
  )
}
