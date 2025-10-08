import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import AppContainer from '../../components/AppContainer/AppContainer';

const Apps = () => {
  const apps = useLoaderData();

  return (
    <div>
      <div className="p-15 space-y-5">
        <h1 className="text-5xl font-bold text-center">Our All Applications</h1>
        <p className="text-center text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="px-16 my-10">
        <p className="text-2xl font-bold">
          <span>({apps.length})</span> Apps Found
        </p>
        
      </div>
      <AppContainer apps={apps}></AppContainer>
    </div>
  );
};

export default Apps;
