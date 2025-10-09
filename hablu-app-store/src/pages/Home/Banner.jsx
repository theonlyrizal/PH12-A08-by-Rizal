import React from 'react';
import heroPng from '../../assets/hero.png';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[c2c2c2] mt-10 md:mt-20 px-4 md:px-16">
      <h1 className="text-center text-3xl md:text-6xl font-bold w-full md:w-1/2">
        We Build{' '}
        <span className="text-transparent bg-clip-text font-bold hablu-gradient">
          Productive
        </span>{' '}
        Apps
      </h1>
      <p className="text-center my-5 text-gray-500 text-sm md:text-base w-full md:w-2/3">
        At Hablu Apps Store, we craft innovative apps designed to make everyday life simpler,
        smarter, and more exciting. Our goal is to turn your ideas into digital experiences that
        truly make an impact.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
        <a target="_blank" href="https://play.google.com/store/games?device=windows" rel="noreferrer">
          <button className="btn w-full md:w-auto flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faGooglePlay} size="lg" /> <span>Google Play</span>
          </button>
        </a>
        <a target="_blank" href="https://www.apple.com/app-store/" rel="noreferrer">
          <button className="btn w-full md:w-auto flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faAppStore} size="lg" /> <span>App Store</span>
          </button>
        </a>
      </div>
      <img
        className="mx-auto mt-6 h-64 md:h-100 object-contain"
        src={heroPng}
        alt="Hero PNG"
      />
    </div>
  );
};

export default Banner;
