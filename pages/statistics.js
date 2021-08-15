import Layout from '../components/Layout';
import TopTracks from '../components/TopTracks';
// import Unsplash from '../components/Unsplash';

export default function Statistics() {
  return (
    <Layout
      title="Statistics | Saurish"
      description="Find out the statistics of some of the services that I utilize."
    >
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Statistics
        </h1>
        <br />
        <div className="max-w-2xl md:max-w-3xl">
          <p className="mx-2 mb-6 text-center text-gray-700 md:text-left text-md md:text-lg md:mx-0 dark:text-gray-400">
            This is a constantly updating page that displays some of the
            statistics of the services I utilize.
          </p>
          <h2 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-center text-black md:text-left md:text-3xl dark:text-white">
            Top Tracks on Spotify
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Updated daily.
          </p>
          <TopTracks />
          {/* <h2 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-center text-black md:text-left md:text-3xl dark:text-white">
            Unsplash Statistics
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            I regularly post my photos on Unsplash. I also{' '}
            <a
              href="https://photos.saurish.com/"
              className="underline text-link-blue dark:text-link-purple"
              target="_blank"
              rel="noopener noreferrer"
            >
              self-host
            </a>{' '}
            them.
          </p>
          <Unsplash /> */}
        </div>
      </div>
    </Layout>
  );
}
