import React from 'react';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

<p>{numeral(500000000).format('0.[0]a').toUpperCase()} Downloads</p>;

const AppCard = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;
  return (
    <div className="bg-white p-4 shadow-[0_0_15px_rgba(9,9,9,0.2)] rounded-2xl space-y-4">
      <div className="h-60 w-full flex justify-center items-center bg-gray-50 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={`${title} image`}
          className="max-w-full max-h-full object-contain rounded-2xl"
        />
      </div>

      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex justify-between">
        <span className="bg-[#f1f5e8] px-2 rounded-lg flex items-center space-x-1 text-[#00D390]">
          <FontAwesomeIcon icon={faDownload} />
          <span>{numeral(downloads).format('0.[0]a').toUpperCase()} </span>
        </span>
        <span className="bg-[#fff0e1] px-2 rounded-lg flex items-center space-x-1 text-[#FF8811]">{ratingAvg}</span>
      </div>
    </div>
  );
};

export default AppCard;
