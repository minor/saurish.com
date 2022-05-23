import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getDatabase } from '../../lib/notion';
import { Text } from './[slug]';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <Layout
      title="Blog | Saurish"
      description="My personal thoughts all written out."
    >
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Blog
        </h1>
        <br />
        <div className="max-w-2xl md:max-w-3xl">
          <p className="mx-4 mb-12 text-lg text-center text-gray-700 dark:text-gray-400 md:mx-0 md:text-left">
            These are some posts about certain topics that I felt the need to
            write and discuss as a student interested in philosophy. My goal: to
            enable deep reflection and inspire intellectual vitality.
          </p>
          {posts.map((post) => {
            const dateString = post.properties.Date.date.start.replace(
              /-/g,
              '/'
            );
            const date = new Date(dateString).toLocaleString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            });
            return (
              <Link
                href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                key={post}
              >
                <a className="w-full">
                  <div className="w-full mb-8 md:mb-10">
                    <div className="flex flex-col justify-between md:flex-row">
                      <h4 className="w-full mb-2 text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
                        <Text text={post.properties.Name.title} />
                      </h4>
                      <p className="w-48 mb-4 text-left text-gray-500 md:mb-0 md:text-right">
                        {date}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {post.properties.Description.rich_text[0].plain_text}
                    </p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database
    },
    revalidate: 1
  };
};
