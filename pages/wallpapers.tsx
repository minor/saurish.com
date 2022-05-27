import Layout from '../components/Layout';
import Image from 'next/image';
import { useState } from 'react';

const wallpapers = [
  {
    name: 'Splash',
    url: 'https://sharedby.blomp.com/wi1RVW',
    width: 3840,
    height: 2160
    // credits: '@adad'
  }
];

export default function Wallpapers() {
  return (
    <Layout
      title="Wallpapers | Saurish"
      description="A curated page of wallpapers that I like and use."
    >
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Wallpapers
        </h1>
        <br />
        <div className="max-w-2xl md:max-w-3xl">
          <p className="mx-2 mb-8 text-left text-gray-700 text-md dark:text-gray-400 md:mx-0 md:mb-12 md:text-lg">
            A collection of wallpapers – either found, or created personally – I
            like and use.
          </p>
          {wallpapers.map((wallpaper) => (
            <div className="mb-8 text-center md:mb-16">
              <h2 className="mb-6 text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
                {wallpaper.name}
              </h2>
              <img
                className="mb-6 shadow-xl rounded-xl"
                src={`images/wallpapers/${wallpaper.name
                  .replace(/\s/g, '')
                  .toLowerCase()}-web.webp`}
              />
              <a
                href={wallpaper.url}
                className="text-lg text-link-blue hover:text-link-blue-hover dark:text-link-purple dark:hover:text-link-purple-hover md:text-xl"
              >
                Download {wallpaper.name} ({wallpaper.width} ×{' '}
                {wallpaper.height} pixels)
              </a>
              {/* <p className="text-gray-700 text-md dark:text-gray-400 md:text-lg">
                Shot by {wallpaper.credits}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
