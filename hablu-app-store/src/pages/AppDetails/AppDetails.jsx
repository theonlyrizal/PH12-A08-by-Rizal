import React from 'react';
import { useLoaderData } from 'react-router';
const AppDetails = () => {
  const app = useLoaderData();
  return (
    <div>
      <h1>I am {app.title}</h1>
    </div>
  );
};

export default AppDetails;
