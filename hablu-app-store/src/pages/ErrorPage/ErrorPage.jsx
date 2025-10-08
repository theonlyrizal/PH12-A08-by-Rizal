import React from 'react';
import { useNavigate } from 'react-router-dom';
import error404 from '../../assets/error-404.png';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#f1f1f1] space-y-4">
      <img src={error404} alt="Page not found" className="max-w-xs" />
      <h2 className="text-2xl font-semibold">Maybe we followed the wrong Track!</h2>
      <p className="text-gray-500">But Life will find its way back</p>
      <button onClick={() => navigate(-1)} className="btn hablu-gradient text-white">
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
