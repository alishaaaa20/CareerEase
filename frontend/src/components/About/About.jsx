import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.png';

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>
        <div className='xl:w-[700px]'>

        
            <h2 className='heading text-primaryColor mt-[35px] text-center'>
              Why Us?
            </h2>
            <p className='text__para'>
              At Effortless Beauty, you can search to find all the local Makeup Artists in your area. With us, you can view each Makeup Artist's prices, services, reviews, and more. Booking a Makeup Artist is a fantastic way to get ready for a special event.  They're trained and experienced in finding the right makeup for your skin type and hair.
            </p>
            <p className='text__para mt-[30px]'>
              Take a scroll around the block to see the best suitable makeup artist on Effortless Beauty. And more often than not, when we find the perfect balance, it creates magic!
            </p>
            <Link to='/services'>
              <button className='btn'>Learn More</button>
            </Link>
          </div>

           {/*-----about image-----*/}
           <div className='relative z-10 xl:w-[500px] flex justify-center mt-[50px] lg:mt-0 '>
            <img src={aboutImg} className="w-3/4" alt="" />
          </div>
        </div>
        </div>
  
    </section>
  );
};

export default About;

