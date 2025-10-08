import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import AppContainer from '../../components/AppContainer/AppContainer';

const Apps = () => {
  const apps = useLoaderData();

  return (
    <div>
      <AppContainer apps={apps}></AppContainer>
      <Outlet />
    </div>
  );
};

export default Apps;
