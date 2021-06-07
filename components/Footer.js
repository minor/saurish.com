import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NowPlaying from '../components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="p-1 text-base text-gray-500 transition sm:p-4 hover:text-gray-700"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Divider = () => {
  return (
    <div className="w-5/6 border border-gray-400 md:w-1/4 dark:border-gray-custom" />
  );
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer className="flex flex-col items-center max-w-2xl">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="w-4 h-4 text-gray-800 dark:text-gray-200"
          >
            {theme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M10.544 8.717l1.166-.855 1.166.855-.467-1.399 1.012-.778h-1.244l-.467-1.243-.466 1.244H10l1.011.778-.467 1.398zm5.442.855l-.467 1.244h-1.244l1.011.777-.467 1.4 1.167-.855 1.165.855-.466-1.4 1.011-.777h-1.244l-.466-1.244zm-8.979-3.02c0-2.259.795-4.33 2.117-5.955A9.418 9.418 0 00.594 9.98c0 5.207 4.211 9.426 9.406 9.426 2.94 0 5.972-1.354 7.696-3.472-.289.026-.987.044-1.283.044-5.194.001-9.406-4.219-9.406-9.426M10 18.55c-4.715 0-8.551-3.845-8.551-8.57 0-3.783 2.407-6.999 5.842-8.131a10.32 10.32 0 00-1.139 4.703c0 5.368 4.125 9.788 9.365 10.245A9.733 9.733 0 0110 18.55m9.406-16.246h-1.71l-.642-1.71-.642 1.71h-1.71l1.39 1.069-.642 1.924 1.604-1.176 1.604 1.176-.642-1.924 1.39-1.069z"
                />
              </svg>
            )}
          </svg>
        )}
      </button>
      <br />
      <NowPlaying />
      <Divider />
      <br className="sm:hidden" />
      <div className="bg-white dark:bg-black">
        <nav className="flex flex-wrap items-center justify-center w-full max-w-5xl mx-auto my-0 space-x-1 bg-white gap-y-1 md:space-x-0 lg:space-x-0 md:mt-4 dark:bg-black bg-opacity-60">
          <Link href="/">
            <a className="p-1 text-gray-900 sm:p-4 hover:text-gray-500 dark:hover:text-gray-500 dark:text-gray-100">
              Home
            </a>
          </Link>
          <Link href="/#projects">
            <a className="p-1 text-gray-900 sm:p-4 hover:text-gray-500 dark:hover:text-gray-500 dark:text-gray-100">
              Projects
            </a>
          </Link>
          <Link href="/#skills">
            <a className="p-1 text-gray-900 sm:p-4 hover:text-gray-500 dark:hover:text-gray-500 dark:text-gray-100">
              Skills
            </a>
          </Link>
          <Link href="/statistics">
            <a className="p-1 text-gray-900 sm:p-4 hover:text-gray-500 dark:hover:text-gray-500 dark:text-gray-100">
              Statistics
            </a>
          </Link>
          <Link href="/blog">
            <a className="p-1 text-gray-900 sm:p-4 hover:text-gray-500 dark:hover:text-gray-500 dark:text-gray-100">
              Blog
            </a>
          </Link>
          <Link href="/#connect">
            <a className="p-1 text-gray-900 sm:p-4 hover:text-gray-500 dark:hover:text-gray-500 dark:text-gray-100">
              Connect
            </a>
          </Link>
        </nav>
      </div>
      <br className="sm:hidden" />
      <div className="flex mb-4 space-x-4">
        <ExternalLink href="https://www.instagram.com/saurishhh">
          <span className="sr-only">Instagram</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-instagram"
            >
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://open.spotify.com/user/5fofyiqlbz4289us6l6lh3wzk?si=ehjQisP4SZmDBVgxKUb8Vg">
          <span className="sr-only">Spotify</span>
          <svg className="w-5 h-5" viewBox="0 0 23 23">
            <g
              transform="translate(-1 -1)"
              stroke-width="2"
              stroke="#000"
              stroke-linecap="round"
              fill="none"
              stroke="currentColor"
              class="feather feather-spotify"
            >
              <circle
                data-name="Ellipse 1"
                cx="10"
                cy="10"
                r="10"
                transform="translate(2 2)"
                stroke-linejoin="round"
              />
              <path
                data-name="Path 2"
                d="M16.4 12.675a17.715 17.715 0 00-4.573-1.166 16.056 16.056 0 00-4.527.22"
              />
              <path
                data-name="Path 3"
                d="M15.12 15.787a17.317 17.317 0 00-3.706-.887 11.782 11.782 0 00-3.3.141"
              />
              <path
                data-name="Path 1"
                d="M6.507 8.251a22.6 22.6 0 016.241-.266 14.934 14.934 0 015.339 1.431"
              />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://twitter.com/saurishhh">
          <span className="sr-only">Twitter</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="mailto:me@saurish.com">
          <span className="sr-only">Email</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://github.com/minor">
          <span className="sr-only">GitHub</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </g>
          </svg>
        </ExternalLink>
      </div>
    </footer>
  );
}
