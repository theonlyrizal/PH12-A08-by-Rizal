import React, { Suspense } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div className="flex-col justify-between w-full min-h-screen overflow-x-hidden">
      <NavBar />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Outlet />
      </Suspense>

      <Footer className="justify-end" />
    </div>
  );
};

export default Root;
