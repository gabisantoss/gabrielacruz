import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
    pathnames: {
        '/': '/',
        '/about': {
            pt: '/sobre',
            en: '/about'
        },
        '/experience': {
            pt: '/experiencia',
            en: '/experience'
        },
    }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
    createNavigation(routing);