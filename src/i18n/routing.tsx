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
        '/blog/[slug]': '/blog/[slug]',
    }
});


export const { Link, getPathname, redirect, usePathname, useRouter } =
    createNavigation(routing);
