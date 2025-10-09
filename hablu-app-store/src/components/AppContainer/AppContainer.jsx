import React from 'react';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const AppContainer = ({ apps }) => {
  return (
    <div className="px-4 md:px-16 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {apps.map((app) => (
        <Link key={app.id} to={`/apps/${app.id}`} className="w-full">
          <AppCard app={app} />
        </Link>
      ))}
    </div>
  );
};

export default AppContainer;
