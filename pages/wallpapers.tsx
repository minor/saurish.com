import Layout from '../components/Layout';
import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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
            This page is still being built.
          </p>
        </div>
      </div>
    </Layout>
  );
}
