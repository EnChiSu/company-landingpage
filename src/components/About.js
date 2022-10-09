import React from 'react';

// import img
import About_Banner from '../assets/img/About_Banner.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[400px] md:mx-auto lg:mx-0 rounded-2xl'
            src={About_Banner}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Our Mission
              </h2>
              {/* <p className='mb-4 text-accent'>
                Freelance Frontend Web Developer
              </p> */}
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                We are on a mission to fix things and shift the power away from institutions back to people - by changing the relationship people have with their personal finances.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
