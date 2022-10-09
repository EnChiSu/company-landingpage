import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-senary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='black-section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            Mooch Guides
          </h2>
          <p className='content text-slate-500 pb-10'>
            A budget is a financial plan that helps you understand how much money you're making, spending, and saving. These are our top sheets and templates free for you to use.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
