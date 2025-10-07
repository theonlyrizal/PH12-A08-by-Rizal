import React from 'react';

const States = () => {
  return (
    <div className="flex-col items-center justify-center bg-gradient-to-br from-[#6d41ca] to-[#9b71da] w-full py-20 space-y-5">
      <h1 className="text-5xl text-center text-white font-semibold">
        Trusted by Millions, Built for You
      </h1>
      <div className="flex justify-between mx-auto w-2/3">
        <div className="flex-col text-center text-white">
          <small className="text-[#ffffff70]">Total Downloads</small>
          <p className="text-6xl font-bold">29.6M</p>
          <small className="text-[#ffffff70]">21% More Than Last Month</small>
        </div>
        <div className="flex-col text-center text-white">
          <small className="text-[#ffffff70]">Total Reviews</small>
          <p className="text-6xl font-bold">906K</p>
          <small className="text-[#ffffff70]">46% More Than Last Month</small>
        </div>
        <div className="flex-col text-center text-white">
          <small className="text-[#ffffff70]">Active Apps</small>
          <p className="text-6xl font-bold">132+</p>
          <small className="text-[#ffffff70]">31 More Will Launch</small>
        </div>
      </div>
    </div>
  );
};

export default States;
