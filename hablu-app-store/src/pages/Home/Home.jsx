import React from 'react';
import Banner from './Banner';
import States from './States';

const Home = () => {
  return (
    <div className="w-full flex-col justify-center items-center">
      <Banner></Banner>
      <States></States>
    </div>
  );
};

export default Home;
