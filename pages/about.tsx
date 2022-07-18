import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function About() {
  const [isLoading, setLoading] = useState(true);
  return (
    <Layout
      title="About | Saurish"
      description="A little bit more information about who I am and what I do."
    >
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          About Me
        </h1>
        <br />
        <div className="max-w-2xl md:max-w-3xl">
          <p className="mx-2 mb-4 text-left text-gray-700 text-md dark:text-gray-400 md:mx-0 md:mb-8 md:text-lg">
            Hey there! I'm Saurish Srivastava. I'm a rising senior at{' '}
            <a
              href="https://evergreenvalleyhigh.esuhsd.org/"
              className="underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Evergreen Valley High School
            </a>{' '}
            and I'm currently exploring computational neuroscience – ranging
            from studying metacognition to neuroimaging – to better understand
            the intersection of neuroscience and computer science. I also enjoy
            web development, and try to{' '}
            <Link href="/#projects">
              <a className="underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover">
                make cool things on the web
              </a>
            </Link>{' '}
            in my freetime.
          </p>
          <p className="mx-2 mb-4 text-left text-gray-700 text-md dark:text-gray-400 md:mx-0 md:mb-8 md:text-lg">
            I lead a few initiatives:{' '}
            <a
              href="https://dialexicon.esuhsd.org/"
              className="underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dialexicon
            </a>
            , where I host weekly philosophy discussions and run a philosophy
            podcast;{' '}
            <a
              href="https://envisionnew.org/"
              className="underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project enVision U.S.
            </a>
            , where I'm kickstarting grassroot nonprofits to create a connected
            community with free and accessible education;{' '}
            <a
              href="https://ataraxiahealth.org/"
              className="underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ataraxia
            </a>
            , where I help promote neurodiversity, while making hygiene and
            mental health kits for unhoused populations.
          </p>
          <p className="mx-2 mb-8 text-left text-gray-700 text-md dark:text-gray-400 md:mx-0 md:mb-12 md:text-lg">
            Some of my hobbies include meeting new people on Twitter,
            volleyball, photography, and debating (qualified to the Tournament
            of Champions in Lincoln Douglas and Public Forum). If you would like
            to connect, please shoot me an email at{' '}
            <a
              href="mailto:me@saurish.com?subject=Hey from the Website!"
              className="underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
              rel="noopener noreferrer"
            >
              me@saurish.com
            </a>{' '}
            or via{' '}
            <a
              href="https://twitter.com/saurishhh"
              className="underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            .
          </p>
          <div className="mx-2 prose text-center sm:mx-auto">
            <Image
              src="/images/me.jpeg"
              alt="A photo of Saurish"
              className={cn(
                'rounded-lg duration-700 ease-in-out',
                isLoading ? 'scale-110 blur-xl' : 'scale-100 blur-0'
              )}
              height={3436}
              width={3265}
              layout="responsive"
              onLoadingComplete={() => setLoading(false)}
            />
            {/* <blockquote>
              <p className="mx-2 mt-2 text-sm text-gray-700 md:mt-4 md:text-lg md:mx-0 dark:text-gray-400">
                Enjoy a photo of me.
              </p>
            </blockquote> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
