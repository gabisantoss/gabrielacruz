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
        '/blog': {
            pt: '/blog',
            en: '/blog'
        },
        '/blog/[slug]': {
            pt: '/blog/[slug]',
            en: '/blog/[slug]'
        }
    }
});

type DynamicPath = `/blog/${string}`;
export type Pathnames = keyof typeof routing.pathnames | DynamicPath;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
    createNavigation(routing);
