import React from 'react';
import InstalledCard from '../InstalledCard/InstalledCard';

const InstalledContainer = ({ installedApps }) => {
  return (
    <div className="px-5 md:px-16">
      {installedApps.map((installedApp) => {
        return <InstalledCard key={installedApp.id} installedApp={installedApp} />;
      })}
    </div>
  );
};

export default InstalledContainer;
