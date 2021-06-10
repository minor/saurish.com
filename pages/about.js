import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout
      title="About | Saurish"
      description="A little bit more information about who I am and what I do."
    >
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          About Me
        </h1>
        <br />
        <div className="max-w-2xl">
          <p className="mx-4 mb-6 text-left text-gray-700 md:mx-0 dark:text-gray-400">
            Hello there! I’m <span className="font-bold">Saurish</span>, a
            sophomore at{' '}
            <a
              href="https://evhs.schoolloop.com"
              target="_blank"
              className="underline text-link-blue dark:text-link-purple"
              rel="noopener noreferrer"
            >
              Evergreen Valley High School
            </a>
            . I love coding and enjoy messing around in different areas of
            computer science! I'm currently exploring different portions of{' '}
            <span className="font-bold">bioinformatics</span>, ranging from
            medical computer vision to genome sequencing. I also really like
            taking{' '}
            <span aria-label="Camera" role="img">
              📸
            </span>{' '}
            (model and nature), which you can find on my{' '}
            <a
              href="https://unsplash.com/@saurishs/"
              target="_blank"
              className="underline text-link-blue dark:text-link-purple"
              rel="noopener noreferrer"
            >
              Unsplash page
            </a>
            .
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
            , a non-profit organization dedicated to the{' '}
            <span className="font-bold">community</span>. Our mission is to
            create a connected community where education is free and accessible.
            With COVID-19 removing most in-person contact, we've been committed
            to helping students from different communities through{' '}
            <span className="font-bold">online services</span>. I'm in charge of
            leading all active projects, managing the team, and teaching!
            <br />
            <br />
            I'm also an avid debater! I participate in Varsity Lincoln Douglas
            on the National Circuit and read a variety of different{' '}
            <a
              href="https://hsld.debatecoaches.org/Evergreen%20Valley/Srivastava%20Neg"
              target="_blank"
              className="underline text-link-blue dark:text-link-purple"
              rel="noopener noreferrer"
            >
              arguments
            </a>
            . If you have any questions, feel free to{' '}
            <a
              href="mailto:me@saurish.com?subject=Hello%20from%20the%20Website!"
              target="_blank"
              className="underline text-link-blue dark:text-link-purple"
              rel="noopener noreferrer"
            >
              contact me
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
