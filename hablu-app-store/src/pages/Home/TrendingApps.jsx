import React from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';
import { Link } from 'react-router';

const TrendingApps = ({ apps }) => {
  return (
    <div className="flex flex-col bg-[c2c2c2] mb-10">
      <div className="text-center py-8 md:py-10 space-y-2 md:space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-500 text-sm md:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <AppContainer apps={apps} />
      <div className="w-full flex justify-center mt-6 md:mt-10">
        <Link className="btn hablu-gradient text-white px-4 py-2 md:px-6 md:py-3" to="/apps">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
