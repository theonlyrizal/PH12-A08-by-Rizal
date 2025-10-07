import React from 'react';
import heroPng from '../../assets/hero.png';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
  return (
    <div className="flex-col items-center justify-center bg=[#f5f5f5] mt-20">
      <h1 className="text-center text-6xl font-bold w-1/2 m-auto">
        We Build{' '}
        <span className="text-transparent bg-clip-text font-bold bg-gradient-to-br from-[#7e4de8] to-[#9f69f0]">
          Productive
        </span>{' '}
        Apps
      </h1>
      <p className="text-center my-5 text-gray-500 w-2/3 m-auto">
        At Hablu Apps Store, we craft innovative apps designed to make everyday life simpler,
        smarter, and more exciting.Our goal is to turn your ideas into digital experiences that
        truly make an impact.
      </p>
      <div className="flex justify-center space-x-4">
        <a target="_blank" href="https://play.google.com/store/games?device=windows">
          <button className="btn">
            <FontAwesomeIcon icon={faGooglePlay} size="xl" /> Google Play
          </button>
        </a>
        <a target="_blank" href="https://www.apple.com/app-store/">
          <button className="btn">
            <FontAwesomeIcon icon={faAppStore} size="xl" /> App Store
          </button>
        </a>
      </div>
      <img className="mx-auto mt-10 h-100" src={heroPng} alt="Hero PNG" />
    </div>
  );
};

export default Banner;
