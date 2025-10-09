import React from 'react';
import Banner from './Banner';
import States from './States';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const apps = useLoaderData().slice(0, 8);

  return (
    <div className="overflow-x-hidden w-full flex flex-col items-center justify-center space-y-5 px-4 md:px-16">
      <div className="w-full">
        <Banner />
      </div>

      <div className="w-full">
        <States />
      </div>

      <div className="w-full">
        <TrendingApps apps={apps} />
      </div>
    </div>
  );
};

export default Home;
