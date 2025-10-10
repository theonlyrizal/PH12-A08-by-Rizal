import React, { useContext } from 'react';
import { AppInstallContext } from '../../context/AppInstallProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';
import { Link } from 'react-router';

const InstalledCard = ({ installedApp }) => {
  const { uninstallApp } = useContext(AppInstallContext);
  const { title, image, downloads, ratingAvg, companyName } = installedApp;
  return (
    <div className="flex items-center justify-between p-4 my-4 shadow-[0_0_15px_rgba(9,9,9,0.2)] rounded-2xl border-[#6a728250] border-1">
      <Link to={`/apps/${installedApp.id}`}>
        <div className="flex items-center flex-1 space-x-4 ">
          <div className="h-20 w-20 flex justify-center items-center rounded-2xl overflow-hidden ">
            <img
              src={image}
              alt={title}
              className="flex=none object-contain max-h-full max-w-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-gray-400 text-sm">{companyName}</p>
            <div className="flex space-x-3 mt-2">
              <span className="bg-[#00D39030] px-3 py-1 rounded-lg flex items-center space-x-1 text-[#00D390]">
                <FontAwesomeIcon icon={faDownload} />
                <span>{numeral(downloads).format('0.0a').toUpperCase()}</span>
              </span>
              <span className="bg-[#FF881130] px-3 py-1 rounded-lg flex items-center space-x-1 text-[#FF8811]">
                {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </Link>

      <button
        onClick={() => uninstallApp(installedApp)}
        className="btn bg-[#d10e18] text-white rounded-2xl ml-4"
      >
        <FontAwesomeIcon icon={faTrash} size="lg" className="mr-1" />
        <span className="hidden md:flex">Uninstall</span>
      </button>
    </div>
  );
};

export default InstalledCard;
