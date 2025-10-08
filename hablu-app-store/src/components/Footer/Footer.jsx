import React from 'react';

const Footer = () => {
  return (
    <footer className="flex-col w-full text-center bg-base-200 text-base-content rounded p-10 space-y-10 shadow-[0_0_5px_rgba(9,9,9,0.2)]">
      <div className="flex-col md:flex-row justify-around items-center">
        <div className="grid grid-flow-col gap-4 [&>a]:underline-offset-[5px] hover:[&>a]:decoration-2">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Dev Forum</a>
          <a className="link link-hover">Publish App</a>
        </div>

        <div>
          <div className="flex-col space-y-3 text-center">
            <h6 className="footer-title">Subscribe to our Newsletter!</h6>
            <fieldset className="w-80">
              <div className="join">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="input input-bordered join-item focus:outline-none "
                />
                <button className="btn hablu-gradient join-item text-white">Subscribe</button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Hablu App Store</p>
      </aside>
    </footer>
  );
};

export default Footer;
