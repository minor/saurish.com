import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export default function Unsplash() {
  const { data } = useSWR('/api/unsplash', fetcher);

  const downloads = new Number(data?.downloads);
  const views = new Number(data?.views);
  const link = 'https://unsplash.com/@saurishs';

  return (
    <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2"></div>
  );
}
