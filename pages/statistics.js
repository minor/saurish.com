import Layout from '../components/Layout';
import TopTracks from '../components/TopTracks';
import Unsplash from '../components/Unsplash';

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
        <div className="max-w-2xl">
          <p className="mx-4 mb-6 text-center text-gray-700 md:mx-0 dark:text-gray-400">
            This is a constantly updating page that displays some of the
            statistics of the services I utilize.
          </p>
          <h2 className="mt-16 mb-4 text-3xl font-bold tracking-tight text-black dark:text-white">
            Top Tracks on Spotify
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Updated daily.
          </p>
          <TopTracks />
        </div>
      </div>
    </Layout>
  );
}
