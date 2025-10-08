import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div className="flex-col justify-between">
      <NavBar />
      <Outlet />
      <Footer className="justify-end" />
    </div>
  );
};

export default Root;
