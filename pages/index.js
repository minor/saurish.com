// packages/components
import Head from 'next/head';
import Footer from '../components/Footer';
import Link from 'next/link';
import Skills from '../components/Skills.js';
import Projects from '../components/Projects';
import Connect from '../components/Connect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Saurish Srivastava – Student, researcher, leader.</title>
        <meta name="robots" content="follow, index" />
        <meta
          content="High school junior interested in computer science, biology, and making a difference."
          name="description"
        />
        <meta property="og:url" content="https://saurish.com" />
        <link rel="canonical" href="https://saurish.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Saurish Srivastava – Student, researcher, leader."
        />
        <meta
          property="og:description"
          content="High school junior interested in computer science, biology, and making a difference."
        />
        <meta
          property="og:title"
          content="Saurish Srivastava – Student, researcher, leader."
        />
        <meta
          property="og:image"
          content="https://saurish.com/static/favicons/send.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@saurishhh" />
        <meta
          name="twitter:title"
          content="Saurish Srivastava – Student, researcher, leader."
        />
        <meta
          name="twitter:description"
          content="High school junior interested in computer science, biology, and making a difference."
        />
        <meta
          name="twitter:image"
          content="https://saurish.com/static/favicons/send.png"
        />
      </Head>
      <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-black">
        <h1 className="max-w-2xl mt-20 mb-8 text-4xl font-bold text-black md:mb-10 md:text-6xl font-manrope dark:text-white">
          Hey, I'm Saurish.
        </h1>
        <p className="max-w-2xl mx-4 mb-8 text-xl text-gray-800 md:mx-0 dark:text-gray-400">
          I’m a junior at{' '}
          <a
            href="https://evhs.schoolloop.com/"
            className="underline text-link-blue dark:text-link-purple"
            target="_blank"
            rel="noopener noreferrer"
          >
            Evergreen Valley High School
          </a>{' '}
          interested in computer science and computational biology.
        </p>

        <div className="flex flex-row flex-wrap justify-center m-2 mb-10 space-x-4 text-center bg-white md:mb-10 md:m-0 gap-y-4 dark:bg-black">
          <Link href="/#projects">
            <a className="px-2.5 py-1 text-lg text-gray-700 border hover:shadow-md border-gray-400 bg-transparent dark:hover:bg-gray-custom transition duration-200 rounded dark:text-gray-300 dark:border-gray-custom">
              Projects
            </a>
          </Link>
          <Link href="/#skills">
            <a className="px-2.5 py-1 text-lg text-gray-700 border hover:shadow-md border-gray-400 bg-transparent dark:hover:bg-gray-custom transition duration-200 rounded dark:text-gray-300 dark:border-gray-custom">
              Skills
            </a>
          </Link>
          <Link href="/statistics">
            <a className="px-2.5 py-1 text-lg text-gray-700 border hover:shadow-md border-gray-400 bg-transparent dark:hover:bg-gray-custom transition duration-200 rounded dark:text-gray-300 dark:border-gray-custom">
              Statistics
            </a>
          </Link>
          <Link href="/blog">
            <a className="px-2.5 py-1 text-lg text-gray-700 border hover:shadow-md border-gray-400 bg-transparent dark:hover:bg-gray-custom transition duration-200 rounded dark:text-gray-300 dark:border-gray-custom">
              Blog
            </a>
          </Link>
          <Link href="/#connect">
            <a className="px-2.5 py-1 text-lg text-gray-700 border hover:shadow-md border-gray-400 bg-transparent dark:hover:bg-gray-custom transition duration-200 rounded dark:text-gray-300 dark:border-gray-custom">
              Connect
            </a>
          </Link>
        </div>
        <div className="w-5/6 h-px max-w-2xl mb-10 md:w-full animate-gradient-x color-bg" />
        <section id="projects" className="mb-10">
          <div className="flex items-center justify-center mb-6">
            <div
              className="flex items-center justify-center mr-5 border border-gray-400 rounded-full dark:border-gray-custom md:mr-3"
              style={{ height: '2.1875rem', width: '2.1875rem' }}
            >
              <h2 className="font-bold text-gray-800 dark:text-gray-200">1</h2>
            </div>
            <h1 className="text-2xl font-medium text-gray-800 underline dark:text-gray-200">
              Projects
            </h1>
          </div>
          <div className="max-w-2xl">
            <p className="mx-4 mb-6 text-center text-gray-700 md:mx-0 dark:text-gray-400">
              I've mostly pursued independent projects, ocassionally working as
              a freelancer. These are some of the most notable projects that I
              have, as well as some of the papers that I have written.
            </p>
            <div className="mx-8 my-5 space-y-14 md:mx-0">
              <Projects />
            </div>
          </div>
        </section>
        <section id="skills" className="mb-20">
          <div className="flex items-center justify-center mb-6">
            <div
              className="flex items-center justify-center mr-5 border border-gray-400 rounded-full dark:border-gray-custom md:mr-3"
              style={{ height: '2.1875rem', width: '2.1875rem' }}
            >
              <h2 className="font-bold text-gray-800 dark:text-gray-200">2</h2>
            </div>
            <h1 className="text-2xl font-medium text-gray-800 underline dark:text-gray-200">
              Skills
            </h1>
          </div>
          <div className="max-w-2xl">
            <p className="mx-4 mb-6 text-center text-gray-700 md:mx-0 dark:text-gray-400">
              I love web development & also love dabbling with random scripts
              and machine learning models with Python and MATLAB – it's quite
              fun, you should try it.
            </p>
            <Skills />
          </div>
        </section>
        <section id="connect" className="mb-10">
          <div className="flex items-center justify-center mb-6">
            <div
              className="flex items-center justify-center mr-5 border border-gray-400 rounded-full dark:border-gray-custom md:mr-3"
              style={{ height: '2.1875rem', width: '2.1875rem' }}
            >
              <h2 className="font-bold text-gray-800 dark:text-gray-200">3</h2>
            </div>
            <h1 className="text-2xl font-medium text-gray-800 underline dark:text-gray-200">
              Connect
            </h1>
          </div>
          <div className="max-w-2xl">
            <Connect />
            <p className="mx-4 mb-6 text-center text-gray-700 md:mx-0 dark:text-gray-400">
              If you want to get in touch with me directly, please send an email
              to{' '}
              <a
                href="mailto:me@saurish.com?subject=Hey from the Website!"
                className="underline text-link-blue dark:text-link-purple"
                target="_blank"
                rel="noopener noreferrer"
              >
                me@saurish.com
              </a>
              .
            </p>
            <div className="mx-8 my-5 space-y-14 md:mx-0"></div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
