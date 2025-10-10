import React, { useState } from 'react';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const AppCard = ({ app }) => {
  const { title, image, downloads, companyName, ratingAvg } = app;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-row md:flex-col justify-between items-center p-4 shadow-[0_0_15px_rgba(9,9,9,0.2)] rounded-2xl space-x-4 md:space-x-0 md:space-y-4">
      <div className="relative h-20 md:h-60 w-20 md:w-full flex justify-center items-center rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={`${title} image`}
          onLoad={() => setImageLoaded(true)}
          className={`max-w-full max-h-full object-contain rounded-2xl transition-opacity duration-200 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="flex flex-col justify-between w-full">
        <h1 className="text-lg text-left font-semibold">{title}</h1>
        <p className="text-gray-400">{companyName}</p>
        <div className="flex space-x-5 md:justify-between mt-2">
          <span className="bg-[#00D39030] px-2 rounded-lg flex items-center space-x-1 text-[#00D390]">
            <FontAwesomeIcon icon={faDownload} />
            <span>{numeral(downloads).format('0.0a').toUpperCase()}</span>
          </span>
          <span className="bg-[#FF881130] px-2 rounded-lg flex items-center space-x-1 text-[#FF8811]">
            {ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
