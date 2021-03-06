import { Fragment } from 'react';
import { getDatabase, getPage, getBlocks } from '../../lib/notion';
import { databaseId } from './index';
import { v4 as uuid } from 'uuid';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { FC, useEffect } from 'react';
import PageViews from '../../components/PageViews';

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
            ? 'rounded-md border border-gray-200 bg-gray-100 px-1 py-0.75 text-purple-500 dark:border-gray-800 dark:bg-gray-900 dark:text-purple-400'
            : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : ''
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a
            className="max-w-4xl underline break-all text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover"
            href={text.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.content}
          </a>
        ) : (
          text.content
        )}
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
        <p className="mb-4 prose text-gray-700 dark:text-gray-300">
          <Text text={value.text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 className="my-4 text-3xl font-bold prose text-black dark:text-white md:text-4xl">
          <Text text={value.text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="my-4 text-xl font-bold prose text-black dark:text-white md:text-2xl">
          <Text text={value.text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="my-4 text-lg font-bold prose text-black dark:text-white md:text-xl">
          <Text text={value.text} />
        </h3>
      );
    case 'bulleted_list_item':
      <li className="mb-4 prose text-gray-700 dark:text-gray-300">
        <Text text={value.text} />
      </li>;
    case 'numbered_list_item':
      return (
        <li className="mb-4 prose text-gray-700 dark:text-gray-300">
          <Text text={value.text} />
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <span className="ml-2 prose text-gray-700 dark:text-gray-300">
              <Text text={value.text} />
            </span>
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary className="prose text-gray-700 cursor-pointer dark:text-gray-300">
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
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <img className="mx-auto rounded-md" src={src} alt={caption} />
          {caption && (
            <figcaption className="text-center">{caption}</figcaption>
          )}
        </figure>
      );
    case 'divider':
      return (
        <hr
          className="w-5/6 mx-auto border border-gray-400 dark:border-gray-custom"
          key={id}
        />
      );
    case 'quote':
      return (
        <blockquote className="prose" key={id}>
          <span className="text-[#6b7280]">{value.text[0].plain_text}</span>
        </blockquote>
      );
    default:
      return (
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          ??? Unsupported block (
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

  const slugPage = page.properties.Slug.rich_text[0].plain_text;

  useEffect(() => {
    fetch(`/api/views/${slugPage}`, {
      method: 'POST'
    });
  }, [slugPage]);
  console.log(slugPage);

  return (
    <Layout
      title={page.properties.Name.title[0].plain_text}
      description={page.properties.Description.rich_text[0].plain_text}
      date={new Date(page.properties.Date.date.start)}
      image={imageLink}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {page.properties.Name.title[0].plain_text}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 mb-10 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <a
                href="https://twitter.com/saurishhh"
                target="_blank"
                className="underline"
                rel="noopener noreferrer"
              >
                Saurish Srivastava
              </a>
              {' / '}
              {new Date(dateString).toLocaleString('en-US', {
                month: 'long',
                day: '2-digit',
                year: 'numeric'
              })}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 min-w-32 dark:text-gray-400 md:mt-0">
            {page.properties.ReadTime.rich_text[0].plain_text} min read{' ??? '}
            {<PageViews slug={slugPage} />}
          </p>
        </div>
        <div className="w-full leading-relaxed prose break-words dark:prose-dark max-w-none">
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
