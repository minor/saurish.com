// packages/components
import Head from 'next/head';
import Footer from '../components/Footer';
import Link from 'next/link';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
// import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Saurish Srivastava – Student, researcher, leader.</title>
        <meta name="robots" content="follow, index" />
        <meta
          content="High school senior interested in philosophy, computational biology, and making a difference."
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
          content="High school senior interested in philosophy, computational biology, and making a difference."
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
          content="High school senior interested in philosophy, computational biology, and making a difference."
        />
        <meta
          name="twitter:image"
          content="https://saurish.com/static/favicons/send.png"
        />
      </Head>
      <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-black">
        <h1 className="max-w-2xl mt-20 mb-8 text-4xl font-semibold text-black dark:text-white md:mb-10 md:text-5xl">
          Hey, I'm Saurish Srivastava
        </h1>
        <p className="max-w-2xl mx-4 mb-8 text-xl text-gray-800 dark:text-gray-400 md:mx-0">
          I’m a rising senior at{' '}
          <a
            href="https://evergreenvalleyhigh.esuhsd.org/"
            className="underline outer-glow text-link-blue dark:text-link-purple"
            target="_blank"
            rel="noopener noreferrer"
          >
            Evergreen Valley High School
          </a>{' '}
          interested in philosophy and computational biology.
        </p>

        <div className="flex flex-row flex-wrap justify-center m-2 mb-10 space-x-4 text-center bg-white gap-y-4 dark:bg-black md:m-0 md:mb-10">
          <Link href="/about">
            <a className="rounded border border-gray-400 bg-transparent px-2.5 py-1 text-lg text-gray-700 transition duration-200 hover:shadow-md dark:border-gray-custom dark:text-gray-300 dark:hover:bg-gray-custom">
              About
            </a>
          </Link>
          <Link href="/blog">
            <a className="rounded border border-gray-400 bg-transparent px-2.5 py-1 text-lg text-gray-700 transition duration-200 hover:shadow-md dark:border-gray-custom dark:text-gray-300 dark:hover:bg-gray-custom">
              Blog
            </a>
          </Link>
          <Link href="/wallpapers">
            <a className="rounded border border-gray-400 bg-transparent px-2.5 py-1 text-lg text-gray-700 transition duration-200 hover:shadow-md dark:border-gray-custom dark:text-gray-300 dark:hover:bg-gray-custom">
              Wallpapers
            </a>
          </Link>
          <Link href="/#projects">
            <a className="rounded border border-gray-400 bg-transparent px-2.5 py-1 text-lg text-gray-700 transition duration-200 hover:shadow-md dark:border-gray-custom dark:text-gray-300 dark:hover:bg-gray-custom">
              Projects
            </a>
          </Link>
          <Link href="/#skills">
            <a className="rounded border border-gray-400 bg-transparent px-2.5 py-1 text-lg text-gray-700 transition duration-200 hover:shadow-md dark:border-gray-custom dark:text-gray-300 dark:hover:bg-gray-custom">
              Skills
            </a>
          </Link>
          <Link href="/#connect">
            <a className="rounded border border-gray-400 bg-transparent px-2.5 py-1 text-lg text-gray-700 transition duration-200 hover:shadow-md dark:border-gray-custom dark:text-gray-300 dark:hover:bg-gray-custom">
              Connect
            </a>
          </Link>
        </div>
        <div className="color-bg mb-10 h-[0.125rem] w-5/6 max-w-2xl animate-gradient-x rounded md:w-full md:max-w-3xl" />
        <section id="projects" className="mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="mr-5 flex h-[2.1875rem] w-[2.1875rem] items-center justify-center rounded-full border border-gray-400 dark:border-gray-custom md:mr-3">
              <h2 className="font-bold text-gray-800 dark:text-gray-200">1</h2>
            </div>
            <h1 className="text-2xl font-medium text-gray-800 underline dark:text-gray-200">
              Projects
            </h1>
          </div>
          <div className="max-w-2xl md:max-w-3xl">
            <p className="mx-4 mb-12 text-lg text-center text-gray-700 dark:text-gray-400 md:mx-0">
              I've mostly pursued independent projects – I love exploring and
              solving problems. These are some of my most notable projects.
            </p>
            <div className="mx-8 my-5 space-y-14 md:mx-0">
              <Projects />
            </div>
          </div>
        </section>
        <section id="skills" className="mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="mr-5 flex h-[2.1875rem] w-[2.1875rem] items-center justify-center rounded-full border border-gray-400 dark:border-gray-custom md:mr-3">
              <h2 className="font-bold text-gray-800 dark:text-gray-200">2</h2>
            </div>
            <h1 className="text-2xl font-medium text-gray-800 underline dark:text-gray-200">
              Skills
            </h1>
          </div>
          <div className="max-w-2xl md:max-w-3xl">
            <p className="mx-4 mb-12 text-lg text-center text-gray-700 dark:text-gray-400 md:mx-0">
              I love web development & also love dabbling with random scripts
              and machine learning models with Python. I'm currently exploring
              convolutional neural networks and their relevance to the
              biological sciences.
            </p>
            <Skills />
          </div>
        </section>
        {/* <section id="subscribe" className="mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="mr-5 flex h-[2.1875rem] w-[2.1875rem] items-center justify-center rounded-full border border-gray-400 dark:border-gray-custom md:mr-3">
              <h2 className="font-bold text-gray-800 dark:text-gray-200">3</h2>
            </div>
            <h1 className="text-2xl font-medium text-gray-800 underline dark:text-gray-200">
              Subscribe
            </h1>
          </div>
          <div className="max-w-2xl md:max-w-2xl">
            <p className="mx-4 mb-12 text-lg text-center text-gray-700 md:mx-0 dark:text-gray-400">
              Get updates on weekly blog posts, reseach I've done, and more.
              Delivered twice a month. Unsubscribe anytime.
            </p>
            <Subscribe />
          </div>
        </section> */}
        <section id="connect" className="mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="mr-5 flex h-[2.1875rem] w-[2.1875rem] items-center justify-center rounded-full border border-gray-400 dark:border-gray-custom md:mr-3">
              <h2 className="font-bold text-gray-800 dark:text-gray-200">3</h2>
            </div>
            <h1 className="text-2xl font-medium text-gray-800 underline dark:text-gray-200">
              Connect
            </h1>
          </div>
          <div className="max-w-2xl md:max-w-2xl">
            <Connect />
            <p className="mx-4 mb-4 text-lg text-center text-gray-700 dark:text-gray-400 md:mx-0">
              If you want to get in touch with me directly, please send an email
              to{' '}
              <a
                href="mailto:me@saurish.com?subject=Hey from the Website!"
                className="underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                me@saurish.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
      <div className="px-8">
        <Footer />
      </div>
    </>
  );
}
