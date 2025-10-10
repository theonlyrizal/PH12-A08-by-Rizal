import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <div className="flex flex-col justify-between w-full min-h-screen overflow-x-hidden">
      <NavBar />
      <div className="h-20"></div>

      <div className="flex-grow">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>

      <Footer className="justify-end" />
    </div>
  );
};

export default Root;
