import React, { useState } from 'react';
import artistImg from '../../assets/images/artist1.jpg';
import ArtistAbout from "./ArtistAbout";
import Feedback from "./Feedback";
import starIcon from '../../assets/images/Star.png';
import SidePanel from './SidePanel';


const ArtistDetails = () => {
  const [tab, setTab] = useState('about');

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid grid-cols-3 gap-5'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={artistImg} alt='Artist' className='w-full' />
              </figure>

              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  Chabel, Kathmandu
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Sneha Basnet</h3>

                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt='' /> 4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>(107)</span>
                </div>
                <p className='text__para text-[14px] leading-6 lg:max-w-[390px] md:text-[15px]'>
                  Service: Bridal Makeup & Hair
                </p>
              </div>
            </div>

            <div className='mt-[70px] border-b border-solid border-[#0066ff34]'>
              <button
                onClick={() => setTab('about')}
                className={`${
                  tab === 'about' && 'border-b border-solid border-primaryColor'
                } py-5 px-2 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => setTab('feedback')}
                className={`${
                  tab === 'feedback' && 'border-b border-solid border-primaryColor'
                } py-5 px-2 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className='mt-[50px]'>
              { tab === 'about' && <ArtistAbout />}
              { tab === 'feedback' && <Feedback />}
            </div>
          </div>
          <div>
       <SidePanel />
      </div> 
        </div>

       
      </div>
    </section>
  );
};

export default ArtistDetails;

