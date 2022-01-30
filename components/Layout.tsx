import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from './Footer';

export default function Layout(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: 'Saurish Srivastava – Student, researcher, leader.',
    description: `High school junior interested in philosophy, computational biology, and making a difference.`,
    image: 'https://saurish.com/static/favicons/send.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="h-screen bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://saurish.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://saurish.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content="Saurish Srivastava – Student, researcher, leader."
        />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@saurishhh" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="flex items-center justify-between w-full max-w-4xl px-8 py-8 mx-auto mb-4 text-gray-900 bg-white md:py-2 sticky-nav md:mt-8 dark:bg-black bg-opacity-60 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <Link href="/">
          <a className="p-1 text-2xl font-bold text-gray-900 hover:text-gray-500 dark:hover:text-gray-500 dark:text-gray-100 sm:p-4">
            S
          </a>
        </Link>
        <div>
          <Link href="/">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500">
              About
            </a>
          </Link>
          <Link href="/statistics">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500">
              Statistics
            </a>
          </Link>
          <Link href="/blog">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500">
              Blog
            </a>
          </Link>
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-white dark:bg-black"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
