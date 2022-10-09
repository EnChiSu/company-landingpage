import React from 'react';

// import woman image
import Hero_Banner from '../assets/img/Hero.jpg';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='lg:flex container mx-auto'>
        <div className=' flex-12 justify-center items-end align-middle'>
          <div className='items-center h-full'>
            <div className='flex-1 flex flex-col items-center lg:items-start align-middle pl-20'>
              <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                Superpowered<br/>budgets
              </h1>
              <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                Quickly automate your bills and savings goals with envelope budgeting and earn rewards
              </p>
              {/* <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                Get Started
              </button> */}
              <a className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all' href="https://apps.apple.com/us/app/mooch-budget-save-money/id1577839468">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-3 justify-center items-end w-[130%] pt-40'>
        <img src={Hero_Banner} alt='Banner'/>
      </div>
    </section>
  );
};

export default Hero;
