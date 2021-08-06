import { Fragment } from 'react';
import { getDatabase, getPage, getBlocks } from '../../lib/notion';
import { databaseId } from './index.js';
import { v4 as uuid } from 'uuid';
import Layout from '../../components/Layout';

const imageSources = [
  'images.unsplash.com',
  's3-us-west-2.amazonaws.com',
  'imgur.com'
];

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }

  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value;
    const id = uuid();
    return (
      <span
        key={id}
        className={[
          bold ? 'font-bold' : '',
          code
            ? 'text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900'
            : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : ''
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link
          ? [
              text.link.url.endsWith('.png') ||
              text.link.url.endsWith('.jpg') ||
              text.link.url.endsWith('.gif') ||
              imageSources.some((u) => text.link.url.includes(u)) ? (
                <div className="mx-4">
                  <img
                    src={text.link.url}
                    alt={text.content}
                    className="w-full rounded-md"
                  />
                </div>
              ) : (
                <a
                  className="underline text-link-blue dark:text-link-purple"
                  href={text.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.content}
                </a>
              )
            ]
          : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          <Text text={value.text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 className="my-4 text-3xl font-bold leading-relaxed text-black md:text-4xl dark:text-white">
          <Text text={value.text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="my-4 text-xl font-bold leading-relaxed text-black dark:text-white md:text-2xl">
          <Text text={value.text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="my-4 text-lg font-bold leading-relaxed text-black dark:text-white md:text-xl">
          <Text text={value.text} />
        </h3>
      );
    case 'bulleted_list_item':
      <li className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
        <Text text={value.text} />
      </li>;
    case 'numbered_list_item':
      return (
        <li className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          <Text text={value.text} />
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <span className="ml-2 leading-relaxed text-gray-700 dark:text-gray-300">
              <Text text={value.text} />
            </span>
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary className="leading-relaxed text-gray-700 cursor-pointer dark:text-gray-300">
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <span className="leading-relaxed text-gray-700 dark:text-gray-300">
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            </span>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    default:
      return (
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          ❌ Unsupported block (
          {type === 'unsupported' ? 'unsupported by Notion API' : type})
        </p>
      );
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  const imageLink =
    'https://og.saurish.com/**' +
    page.properties.Name.title[0].plain_text.replace('?', '%3F') +
    '**.png?theme=dark&&md=1&fontSize=100px&images=https%3A%2F%2Fwww.saurish.com%2Fstatic%2Ffavicons%2Ffavicon-dark.png';

  const dateString = page.properties.Date.date.start.replace(/-/g, '/');

  return (
    <Layout
      title={page.properties.Name.title[0].plain_text}
      description={page.properties.Description.rich_text[0].plain_text}
      date={new Date(page.properties.Date.date.start)}
      image={imageLink}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {page.properties.Name.title[0].plain_text}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 mb-10 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {'Saurish Srivastava / '}
              {new Date(dateString).toLocaleString('en-US', {
                month: 'long',
                day: '2-digit',
                year: 'numeric'
              })}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {page.properties.ReadTime.rich_text[0].plain_text} minutes
          </p>
        </div>
        <div className="w-full leading-relaxed prose dark:prose-dark max-w-none">
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({
      params: {
        slug: page.properties.Slug.rich_text[0].plain_text
      }
    })),
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const database = await getDatabase(databaseId);
  const filter = database.filter(
    (blog) => blog.properties.Slug.rich_text[0].plain_text === slug
  );
  const page = await getPage(filter[0].id);
  const blocks = await getBlocks(filter[0].id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id)
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren
    },
    revalidate: 1
  };
};
