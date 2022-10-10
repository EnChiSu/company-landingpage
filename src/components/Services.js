import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-quaternary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            Your Best Financial Management Tool
          </h2>
          <p className='subtitle'>
            We’re revolutionizing the relationship people have with their personal finances. Through the Envelope Budgeting Method, Mooch is here to help you achieve your financial goals, one envelope at a time.
          </p>
        </div>
        <div className='grid lg:grid-cols-2 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-paragraph p-6 rounded-2xl flex justify-center items-center border-2 border-solid	border-black' key={index}>
                <div className='text-accent rounded-sm w-30 h-30 text-[28px]'>
                  {icon}
                </div>
                <div>
                  <h4 className='text-xl text-black font-medium mb-2'>{name}</h4>
                  <p className='content mb-5'>{description}</p>
                  <button class="bg-transparent hover:bg-yellow-600 text-yellow-600 font-bold hover:text-white py-2 px-4 border border-yellow-600 rounded inline-flex items-center">
                    <span>Find out more</span>
                    <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
