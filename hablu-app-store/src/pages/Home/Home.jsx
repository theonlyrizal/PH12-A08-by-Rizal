import React from 'react';
import Banner from './Banner';
import States from './States';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const apps = useLoaderData().slice(0, 8);
  return (
    <div className="w-full flex-col justify-center items-center">
      <Banner />
      <States />
      <TrendingApps apps={apps} />
    </div>
  );
};

export default Home;
