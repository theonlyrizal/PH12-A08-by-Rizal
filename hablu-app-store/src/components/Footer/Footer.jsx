import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-center bg-base-200 text-base-content rounded p-10 space-y-10 shadow-[0_0_5px_rgba(9,9,9,0.2)]">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        <div className="flex flex-wrap justify-center gap-6 [&>a]:underline-offset-[5px] hover:[&>a]:decoration-2">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Dev Forum</a>
          <a className="link link-hover">Publish App</a>
        </div>
      </div>

      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by Hablu App Store</p>
      </aside>
    </footer>
  );
};

export default Footer;
