import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import numeral from 'numeral';

const AppStats = ({ app }) => {
  const { image, title, companyName, size, reviews, ratingAvg, downloads } = app;
  return (
    <div className="py-10 h-80">
      <div className="flex items-stretch">
        <div className="w-72 mx-10 flex-shrink-0">
          <img
            className="h-full w-auto object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-4xl"
            src={image}
            alt={`${title} logo`}
          />
        </div>

        <div className="flex-col space-y-3 w-full justify-between items-end">
          <p className="text-3xl font-bold">{title}</p>
          <p>
            Developed by{' '}
            <span className="font-bold hablu-gradient text-transparent bg-clip-text">
              {companyName}
            </span>
          </p>

          <hr className="border-gray-300 my-4" />

          <div className="flex space-x-10">
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

          <button className="btn bg-[#1bb685] text-white">Install Now ({size}MB)</button>
        </div>
      </div>
    </div>
  );
};

export default AppStats;
