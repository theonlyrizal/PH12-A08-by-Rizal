import React from 'react';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const AppContainer = ({ apps }) => {
  console.log(apps);

  return (
    <div className="px-16 mb-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {apps.map((app) => {
        return (
          <Link key={app.id} to={`/apps/${app.id}`}>
            <AppCard app={app} />
          </Link>
        );
      })}
    </div>
  );
};

export default AppContainer;
