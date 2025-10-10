import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../assets/error-404.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faReply } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center space-y-4">
      <img src={error404} alt="Page not found" className="max-w-xs" />
      <h2 className="text-2xl text-center font-semibold">Maybe we followed the wrong Track!</h2>
      <p className="text-gray-500">But Life will find its way back</p>
      <div className="flex space-x-2">
        <Link to={-1} className="btn hablu-gradient text-white">
          <FontAwesomeIcon icon={faReply} />
          Go Back
        </Link>
        <Link to="/" className="btn hablu-gradient text-white">
          <FontAwesomeIcon icon={faHome} />
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
