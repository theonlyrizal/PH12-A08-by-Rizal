import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  

  const navbarLinkList = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'isActiveCSS' : undefined)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={({ isActive }) => (isActive ? 'isActiveCSS' : undefined)}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={({ isActive }) => (isActive ? 'isActiveCSS' : undefined)}>
          Installations
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-16 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
          >
            {navbarLinkList}
          </ul>
        </div>
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} className="h-10" alt="Logo" />
          <p className='text-transparent bg-clip-text font-bold hablu-gradient'>HABLU APP STORE</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{navbarLinkList}</ul>
      </div>
      <div className="navbar-end">
        <a
          target="_blank"
          href="https://github.com/theonlyrizal"
          className='btn text-white hablu-gradient'
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <p>Contribute</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
