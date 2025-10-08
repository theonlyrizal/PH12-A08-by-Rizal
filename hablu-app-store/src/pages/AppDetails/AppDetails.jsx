import React from 'react';
import { Link, useLoaderData } from 'react-router';

import AppRatingsChart from './AppRatingsChart';
import AppStats from './AppStats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const AppDetails = () => {
  const app = useLoaderData();

  const { ratings, description } = app;
  return (
    <div className="px-16 pb-10 bg-base-200">
      <AppStats app={app} />
      <hr className="border-gray-300 my-10" />
      <AppRatingsChart ratings={ratings} />
      <hr className="border-gray-300 my-10" />
      <div className="pb-10 space-y-5 h-60">
        <h1 className="text-[#001931] text-xl font-bold">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex justify-center space-x-5">
        <Link
          to={`/apps/${app.id === 1 ? app.id : app.id - 1}`}
          className={`${app.id === 1 ? 'hidden' : 'flex'} btn border-2 border-gray-400 rounded-4xl`}
        >
          <FontAwesomeIcon icon={faAngleLeft} /> prev
        </Link>

        <Link
          to={`/apps/${app.id === 25 ? app.id : app.id + 1}`}
          className={`${
            app.id === 25 ? 'hidden' : 'flex'
          } btn border-2 border-gray-400 rounded-4xl`}
        >
          <FontAwesomeIcon icon={faAngleRight} /> next
        </Link>
      </div>
    </div>
  );
};

export default AppDetails;
