import React from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';
import { Link } from 'react-router';

const TrendingApps = ({ apps }) => {
  return (
    <div className="flex-col bg-[c2c2c2] mb-10">
      <div className="text-center py-10 space-y-3">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <AppContainer apps={apps} />
      <div className="w-full flex justify-center">
        <Link className="btn hablu-gradient text-white" to="/apps">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
