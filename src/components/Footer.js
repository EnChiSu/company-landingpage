import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Mooch_Logo from '../assets/img/mooch_logo.png';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent rounded-sm w-10 h-10 flex items-start justify-center mt-4 mb-4 lg:mb-0 text-2xl' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={Mooch_Logo} alt='' style={{ width: '170px' }}/>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            Copyright © Mooch All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
