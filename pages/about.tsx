import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout
      title="About | Saurish"
      description="A little bit more information about who I am and what I do."
    >
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          About
        </h1>
        <br />
        <div className="max-w-2xl md:max-w-3xl">
          <p className="mx-2 mb-12 text-center text-gray-700 md:text-left md:mb-20 text-md md:text-lg md:mx-0 dark:text-gray-400">
            Hey there! I'm Saurish Srivastava. I'm a junior at{' '}
            <a
              href="https://evhs.schoolloop.com/"
              className="underline text-link-blue dark:text-link-purple"
              target="_blank"
              rel="noopener noreferrer"
            >
              Evergreen Valley High School
            </a>
            , located in the capital of the Silicon Valley: San Jose. I love
            coding and enjoy messing around in different areas of computer
            science! I'm currently exploring bioinformatics – ranging from
            medical computer vision to genome sequencing – to understand the
            intersection of biology and computer science.
            <br />
            <br />
            I'm a hobbyist photographer (mostly nature). You can see some of my
            shots on my{' '}
            <a
              href="https://unsplash.com/@saurishs/"
              className="underline text-link-blue dark:text-link-purple"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash page
            </a>
            .
            <br />
            <br />
            I'm also an avid debater! I have qualified to the Tournament of
            Champions in both Varsity Lincoln Douglas and Varsity Public Forum.
            I read a variety of different{' '}
            <a
              href="https://hsld.debatecoaches.org/Evergreen%20Valley/Srivastava%20Neg"
              target="_blank"
              className="underline text-link-blue dark:text-link-purple"
              rel="noopener noreferrer"
            >
              arguments
            </a>{' '}
            and mostly engage in critical literature and philosophical bases.
            <br />
            <br />
            Because I love reading and discussing philosophy, I am the
            vice-president of{' '}
            <a
              href="https://dialexicon.org/"
              target="_blank"
              className="underline text-link-blue dark:text-link-purple"
              rel="noopener noreferrer"
            >
              Dialexicon
            </a>{' '}
            where I organize a weekly discussion of philosophy and lead a high
            school student journal.
            <br />
            <br />
            I’m the president and executive director at{' '}
            <a
              href="https://envisionnew.org/"
              target="_blank"
              className="underline text-link-blue dark:text-link-purple"
              rel="noopener noreferrer"
            >
              Project enVision U.S.
            </a>
            , a non-profit organization dedicated to the community. Our mission
            is to create a connected community where education is free and
            accessible. I'm also the co-founder and director of{' '}
            <a
              href="https://ataraxiahealth.org/"
              target="_blank"
              className="underline text-link-blue dark:text-link-purple"
              rel="noopener noreferrer"
            >
              Ataraxia
            </a>
            , where we have been promoting neurodiversity through digital means,
            and physically creating mental health and hygiene kits for the
            homeless populations.
            <br />
            <br />
          </p>
          <div className="mx-2 prose text-center sm:mx-auto">
            <Image
              src="/images/me.JPG"
              className="rounded-lg"
              alt="A photo of Saurish"
              height={959}
              width={686}
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
