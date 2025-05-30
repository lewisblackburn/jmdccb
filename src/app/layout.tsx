import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import PageTransition from '@/components/page-transition';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'JMDCCB',
    description: 'JMDCCB - Your trusted construction and contracting partner',
    openGraph: {
        title: 'JMDCCB',
        description: 'JMDCCB - Your trusted construction and contracting partner',
        images: [
            {
                url: '/images/og.webp',
                width: 1200,
                height: 630,
                alt: 'JMDCCB'
            }
        ],
        type: 'website'
    },
    icons: {
        icon: [
            { url: '/images/favicon.ico' },
            { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
        other: [
            {
                rel: 'mask-icon',
                url: '/images/safari-pinned-tab.svg',
                color: '#5bbad5'
            }
        ]
    },
    manifest: '/images/site.webmanifest',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'JMDCCB'
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1
    },
    themeColor: '#ffffff'
};

// Enable automatic scroll restoration
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <head>
                <link rel='icon' href='/images/favicon.ico' />
                <link rel='icon' href='/images/favicon-16x16.png' sizes='16x16' type='image/png' />
                <link rel='icon' href='/images/favicon-32x32.png' sizes='32x32' type='image/png' />
                <link rel='apple-touch-icon' href='/images/apple-touch-icon.png' sizes='180x180' type='image/png' />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground flex min-h-screen flex-col overscroll-none antialiased`}>
                <ThemeProvider attribute='class' forcedTheme='light'>
                    <Banner />
                    <Navbar />
                    <main className='flex-1'>
                        <PageTransition>{children}</PageTransition>
                    </main>
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
