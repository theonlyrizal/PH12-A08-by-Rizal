import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router';
import AppContainer from '../../components/AppContainer/AppContainer';

const Apps = () => {
  const apps = useLoaderData();
  const [appFilter, setAppFilter] = useState(apps);
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setLoading(true);
    console.log(e.target.value);
    if (e.target.value === '') {
      setAppFilter(apps);
      setLoading(false);
    } else {
      const filteredApps = apps.filter((pick) =>
        pick.title.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setAppFilter(filteredApps);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-5 md:p-15 space-y-5 overflow-x-hidden">
        <h1 className="text-5xl font-bold text-center">Our All Applications</h1>
        <p className="text-center text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 justify-between px-5 md:px-16 my-10 overflow-x-hidden">
        <p className="text-2xl font-bold">
          <span>({appFilter.length})</span> Apps Found
        </p>
        <input
          type="text"
          placeholder="Search for Apps"
          onChange={handleSearch}
          className="input"
        />
      </div>
      {loading ? (
        <span className="loading loading-spinner loading-xl mx-auto"></span>
      ) : appFilter.length === 0 ? (
        <h1 className="text-5xl font-bold text-amber-500 text-center p-16">No App Found!</h1>
      ) : (
        <AppContainer apps={appFilter}></AppContainer>
      )}
    </div>
  );
};

export default Apps;
