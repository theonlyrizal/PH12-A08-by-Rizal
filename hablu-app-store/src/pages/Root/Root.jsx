import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <h1>I am Root</h1>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;