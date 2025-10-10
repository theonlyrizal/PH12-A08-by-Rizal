import React from 'react';
import { Link } from 'react-router-dom';
import appNotFound from '../../assets/App-Error.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

const AppNotFound = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center space-y-4">
      <img src={appNotFound} alt="Page not found" className="max-w-xs" />
      <h2 className="text-2xl font-semibold">An App that was never here</h2>
      <p className="text-gray-500">Look for your app in the Apps library</p>
      <div className="flex space-x-2">
        <Link to='/apps' className="btn hablu-gradient text-white">
          <FontAwesomeIcon icon={faTableCellsLarge} />
          Back to Apps
        </Link>
        <Link to="/" className="btn hablu-gradient text-white">
          <FontAwesomeIcon icon={faHome} />
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
