import { useState } from 'react';
import Image from 'next/image';
import { theme } from '../lib/tailwind';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Image = {
  title: string;
  imageSrc: string;
};

function BlurImage({ imageSrc, title }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Image
        alt={title}
        src={`${imageSrc}.webp`}
        width="1572"
        height="983"
        sizes={`(min-width:${theme.screens.md}) 384px, 100vw`}
        layout="responsive"
        // objectFit="cover"
        className={cn(
          'rounded-md duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-xl' : 'scale-100 blur-0'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-700 transition hover:text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Project = ({ image, glink, link, title, description, index }) => {
  return (
    <div className="flex flex-wrap md:items-center md:justify-between">
      <div
        className={
          index
            ? 'w-full rounded shadow-xl md:w-6/12'
            : 'w-full rounded shadow-xl md:order-1 md:w-6/12'
        }
      >
        <BlurImage imageSrc={image} title={title} />
      </div>
      <div className="flex flex-col w-full mx-1 mt-3 mb-1 space-y-3 overflow-auto md:w-5/12 ">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium underline text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
        >
          {title}
        </a>
        <p className="text-gray-500">{description}</p>
        <div className="flex justify-center w-auto space-x-4">
          <div className="flex">
            <ExternalLink href={glink}>
              <span className="sr-only">Github</span>
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
          <div className="flex">
            <ExternalLink href={link}>
              <span className="sr-only">Link</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3M8 12h8" />
                </g>
              </svg>
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const FullProjects = () => (
  <>
    <Project
      image="/images/plutonium"
      glink="https://github.com/minor/plutonium/"
      link="https://plutonium.saurish.com"
      title="Plutonium"
      index={false}
      description="Plutonium is a free template for businesses built with Next.js 11 and styled with TailwindCSS. It comes with built in dark-mode support & blazing fast speeds."
    />
    {/* <Project
      image="/images/c2cmha"
      glink="https://github.com/minor/english-project"
      link="https://c2cmha.vercel.app/"
      title="Coast-to-Coast Mental Health Awareness"
      index={true}
      description="This website was a theoretical project for school with no firm plans. I utilized it to exhibit my designing skills. If you are interested in reaching out to an organization that is dedicated to promoting neurodiversity, please check out Ataraxia from Project enVision U.S."
    /> */}
  </>
);

export default function Projects() {
  const [isShowingFullProjects, showFullProjects] = useState(false);

  return (
    <>
      <Project
        image="/images/envisionnew"
        glink="https://github.com/envisionnew/envisionnew.org/"
        link="https://envisionnew.org/"
        title="Project enVision U.S."
        index={true}
        description="I'm the President of Project enVision U.S., a 501(c)(3) non-profit
          organization dedicated to increasing the accessibility of education
          within our community. We're building a network of volunteers dedicated
          to their community."
      />
      <Project
        image="/images/ataraxia"
        glink="https://github.com/envisionnew/ataraxia.envisionnew.org/"
        link="https://ataraxia.envisionnew.org/"
        title="Ataraxia"
        index={false}
        description="I'm the co-founder and director of operations of Ataraxia, a
         non-profit organization incubated by Project enVision U.S. We are dedicated
         to providing adequate digital resources to promote neurodiversity within our
         communities, while materially impacting the mental health of underserved populations."
      />
      <Project
        image="/images/dialexicon"
        glink="https://github.com/minor/dialexicon.org/"
        link="https://dialexicon.org"
        title="Dialexicon"
        index={true}
        description="I'm one of the presidents of Dialexicon, a global non-profit organization that serves as a platform for high school students to learn, discuss, and contribute to philosophical thought and writing. At Dialexicon, we value deep reflections of society – namely education – and create modes of empathy to explore intersectionality."
      />
      {isShowingFullProjects ? (
        <FullProjects />
      ) : (
        <button
          type="button"
          className="flex items-center px-4 py-2 mx-auto my-4 text-sm font-medium text-gray-900 rounded-md dark:text-gray-100"
          onClick={() => showFullProjects(true)}
        >
          See More
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
      {isShowingFullProjects ? (
        <button
          type="button"
          className="flex items-center px-4 py-2 mx-auto my-4 text-sm text-gray-800 rounded-md dark:text-gray-200"
          onClick={() => showFullProjects(false)}
        >
          See Less
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 15l-6-6-6 6"
            />
          </svg>
        </button>
      ) : (
        <div />
      )}
    </>
  );
}
