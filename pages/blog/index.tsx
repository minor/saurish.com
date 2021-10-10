import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getDatabase } from '../../lib/notion';
import { Text } from './[slug].js';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <Layout
      title="Blog | Saurish"
      description="My personal thoughts all written out."
    >
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <br />
        <div className="max-w-2xl md:max-w-3xl">
          <p className="mx-4 mb-12 text-lg text-center text-gray-700 md:mx-0 dark:text-gray-400">
            These are some of my thoughts on some cool and important topics, as
            well as some tutorials. All the content is hosted in Notion{' '}
            <a
              href="https://www.notion.so/42772aeed8a74e62b02f93a3eaeba687?v=6868377308e944dc8fbd559587c76130"
              className="underline text-link-blue dark:text-link-purple"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{' '}
            & being pulled through their{' '}
            <a
              href="https://developers.notion.com/"
              className="underline text-link-blue dark:text-link-purple"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beta API
            </a>
            .
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
              >
                <a className="w-full">
                  <div className="w-full mb-8">
                    <div className="flex flex-col justify-between md:flex-row">
                      <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                        <Text text={post.properties.Name.title} />
                      </h4>
                      <p className="w-48 mb-4 text-left text-gray-500 md:text-right md:mb-0">
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