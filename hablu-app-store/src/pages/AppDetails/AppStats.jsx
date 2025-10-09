import React, { useContext } from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import numeral from 'numeral';
import { AppInstallContext } from '../../context/AppInstallProvider';

const AppStats = ({ app }) => {
  const { image, title, companyName, size, reviews, ratingAvg, downloads } = app;
  const { installedApps, installApp } = useContext(AppInstallContext);
  const isInstalled = Boolean(installedApps.find((installed) => installed.id === app.id));

  return (
    <div className="py-10 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-stretch md:space-x-10 space-y-8 md:space-y-0 px-5 md:px-0">
        <div className="w-40 md:w-72 flex-shrink-0">
          <img
            className="h-auto w-full object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-4xl"
            src={image}
            alt={`${title} logo`}
          />
        </div>

        <div className="flex flex-col justify-between w-full space-y-3">
          <div>
            <p className="text-3xl font-bold">{title}</p>
            <p>
              Developed by{' '}
              <span className="font-bold hablu-gradient text-transparent bg-clip-text">
                {companyName}
              </span>
            </p>
          </div>

          <hr className="border-gray-300 my-4" />

          <div className="flex flex-wrap gap-10">
            <div className="space-y-2">
              <img src={downloadIcon} alt="download Icon" />
              <p className="text-gray-500">Downloads</p>
              <p className="text-4xl font-bold">
                {numeral(downloads).format('0.[0]a').toUpperCase()}
              </p>
            </div>

            <div className="space-y-2">
              <img src={ratingIcon} alt="rating Icon" />
              <p className="text-gray-500">Average Ratings</p>
              <p className="text-4xl font-bold">{ratingAvg}</p>
            </div>

            <div className="space-y-2">
              <img src={reviewIcon} alt="review Icon" />
              <p className="text-gray-500">Total Reviews</p>
              <p className="text-4xl font-bold">{numeral(reviews).format('0a').toUpperCase()}</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <button
              disabled={isInstalled}
              onClick={() => installApp(app)}
              className="btn bg-[#1bb685] text-white my-5 px-6 md:px-8 rounded-xl w-full md:w-auto text-xl"
            >
              {isInstalled ? `Installed` : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStats;
