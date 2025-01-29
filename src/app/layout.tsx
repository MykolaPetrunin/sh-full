import './globals.css';

import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

import { inter } from '@/configs/fonts';
import { ThemeProvider } from '@/providers/theme/ThemeProvider';

export const metadata: Metadata = {
    title: 'Sugar Hunter App',
    description: 'We help you to calculate your meal'
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
