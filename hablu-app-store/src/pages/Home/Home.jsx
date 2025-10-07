import React from 'react';

const Home = () => {
  return (
    <div className="w-full flex-col justify-center items-center">
      <div className="flex-col items-center justify-center bg=[#f5f5f5] py-20">
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
        <div className="flex space-x-4">
          <button className="btn">Google Play</button>
          <button className="btn">App Store</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
