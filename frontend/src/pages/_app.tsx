import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon.png" type="image/png" />
            </Head>
            <nav className="bg-white border-b shadow p-4 flex space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/recipes/new" className="hover:underline">New Recipe</Link>
                <Link href="/login" className="hover:underline">Login</Link>
            </nav>
            <Component {...pageProps} />
        </>
    );
}
