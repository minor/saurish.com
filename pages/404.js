import Layout from "../components/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-8">
        <h1 className="mb-10 text-3xl font-bold tracking-tight text-center text-gray-900 md:text-5xl dark:text-gray-100">
          Whoops, that page is unavailable.
        </h1>
        <Link href="/">
          <a className="p-4 mx-auto font-semibold text-center text-gray-800 transition duration-200 border border-gray-400 rounded-md hover:shadow-md dark:hover:bg-gray-custom dark:border-gray-custom w-44 dark:text-gray-200">
            Return Home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
