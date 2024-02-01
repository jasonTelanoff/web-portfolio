import { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';

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
