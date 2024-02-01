import { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hello World!',
    description: '...',
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <html lang="en" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
