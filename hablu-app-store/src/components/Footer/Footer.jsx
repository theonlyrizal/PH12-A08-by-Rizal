import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-center bg-base-200 text-base-content rounded p-10 space-y-10 shadow-[0_0_5px_rgba(9,9,9,0.2)]">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-2">
          <img src={logo} className="h-10 max-w-full" alt="Logo" />
          <p className="text-transparent bg-clip-text font-bold hablu-gradient">HABLU APP STORE</p>
        </div>
        <div className="flex-col flex md:flex-row justify-center gap-3 md:gap-10 ">
          <div className="flex flex-col justify-center gap-3 [&>a]:underline-offset-[5px] hover:[&>a]:decoration-2">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div className="flex flex-col justify-center gap-3 [&>a]:underline-offset-[5px] hover:[&>a]:decoration-2">
            <a className="link link-hover">Dev Forum</a>
            <a className="link link-hover">Publish App</a>
          </div>
        </div>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>
        </nav>
      </div>

      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by Hablu App Store</p>
      </aside>
    </footer>
  );
};

export default Footer;
