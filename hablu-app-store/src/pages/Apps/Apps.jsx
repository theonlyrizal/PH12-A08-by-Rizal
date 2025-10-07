import React from 'react';
import { Outlet } from 'react-router';

const Apps = () => {
  return (
    <div>
      <h1>I am Apps</h1>
      <Outlet />
    </div>
  );
};

export default Apps;
