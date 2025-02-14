import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "src/i18n/routing";

import '@/styles/global.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google";

import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from '@/app/sitemap'
import { notFound } from "next/navigation";

import { ReactNode } from 'react';


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Gabriela Cruz | tecnologia e desenvolvimento de software',
        template: '%s | Gabriela Cruz',
    },
    description: 'This is my portfolio.',
    openGraph: {
        title: 'My Portfolio',
        description: 'This is my portfolio.',
        url: baseUrl,
        siteName: 'My Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const setInitialTheme = `
  (function() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

const cx = (...classes) => classes.filter(Boolean).join(' ')

type Props = {
    children: ReactNode;
    locale: string;
};

export default async function RootLayout({
    children,
    locale
}: Props) {

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html
            lang={locale}>
            <head>
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
            </head>
            <body className={cx(
                'font-sans subpixel-antialiased antia max-w-md 2xl:max-w-xl mt-8 mx-auto dark:bg-black',
                fontSans.variable
            )}>
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 backdrop-blur-md bg-white/90 dark:bg-black/90">
                    <NextIntlClientProvider messages={messages}>
                        < Navbar />
                        {children}
                    </NextIntlClientProvider>
                    <Footer />
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    )
}
