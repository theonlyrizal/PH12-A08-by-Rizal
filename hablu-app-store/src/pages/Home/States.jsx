import React from 'react';

const States = () => {
  return (
    <div className="flex flex-col items-center justify-center hablu-gradient w-full py-10 md:py-20 space-y-5">
      <h1 className="text-3xl md:text-5xl text-center text-white font-semibold">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex flex-col md:flex-row justify-between mx-auto w-2/3 space-y-10 md:space-y-0 md:space-x-10">
        <div className="flex flex-col text-center text-white">
          <small className="text-[#ffffff70]">Total Downloads</small>
          <p className="text-3xl md:text-6xl font-bold">29.6M</p>
          <small className="text-[#ffffff70]">21% More Than Last Month</small>
        </div>

        <div className="flex flex-col text-center text-white">
          <small className="text-[#ffffff70]">Total Reviews</small>
          <p className="text-3xl md:text-6xl font-bold">906K</p>
          <small className="text-[#ffffff70]">46% More Than Last Month</small>
        </div>

        <div className="flex flex-col text-center text-white">
          <small className="text-[#ffffff70]">Active Apps</small>
          <p className="text-3xl md:text-6xl font-bold">132+</p>
          <small className="text-[#ffffff70]">31 More Will Launch</small>
        </div>
      </div>
    </div>
  );
};

export default States;
