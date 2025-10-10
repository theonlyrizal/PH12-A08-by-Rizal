import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppContainer from '../../components/AppContainer/AppContainer';

const Apps = () => {
  const apps = useLoaderData();
  const [appFilter, setAppFilter] = useState(apps);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setLoading(true);
    const value = e.target.value;
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (value === '') {
      setAppFilter(apps);
    } else {
      const filteredApps = apps.filter((pick) =>
        pick.title.toLowerCase().includes(value.toLowerCase())
      );
      setAppFilter(filteredApps);
    }

    setLoading(false);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="p-5 md:p-15 space-y-5">
        <h1 className="text-5xl font-bold text-center">Our All Applications</h1>
        <p className="text-center text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 justify-between px-5 md:px-16 my-10">
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
        <div className="flex justify-center items-center min-h-[40vh]">
          <span className="loading loading-spinner loading-xl text-primary"></span>
        </div>
      ) : appFilter.length === 0 ? (
        <h1 className="text-5xl font-bold text-amber-500 text-center p-16">No App Found!</h1>
      ) : (
        <AppContainer apps={appFilter} />
      )}
    </div>
  );
};

export default Apps;
