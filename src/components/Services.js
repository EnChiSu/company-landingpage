import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-quaternary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            Grow with Mooch
          </h2>
          <p className='subtitle'>
            We’re revolutionizing the relationship people have with their personal finances. Through the Envelope Budgeting Method, Mooch is here to help you achieve your financial goals, one envelope at a time.
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-paragraph p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-40 h-40 flex justify-center items-center mb-8 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl text-black font-medium mb-2'>{name}</h4>
                <p className='content'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
