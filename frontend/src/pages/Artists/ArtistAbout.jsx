import React from 'react';
import { formateDate } from '../../utils/formateDate';

const ArtistAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About of
          <span className='text-[24px] font-bold text-irisBlurColor leading-9'>
            Sneha Basnet
          </span>
        </h3>
        <p className='text__para'>
          My journey began at Apollo Makeup Academy, where I obtained my Certificate in Bridal Makeup. My training at this renowned institution has equipped me with the latest techniques and trends in bridal beauty. Not just a makeup artist; I'm an artist at heart.
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Education
        </h3>

        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-10'>
            <div>
              <span className='text-irisBlueColor text-base leading-6 font-medium text-textColor'>
                {formateDate('12-07-2015')} - {formateDate('12-01-2016')}
              </span>
              <p className='text-base leading-6 font-medium text-textColor'>
                CERTIFICATE IN BRIDAL MAKE-UP
              </p>
            </div>
            <p className='text-sm leading-5 font-medium text-textColor'>
              Apollo Makeup Academy, Kathmandu
            </p>
          </li>
        </ul>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>

        <ul className='grid sm:grid-cols-2 gap-10 pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-base leading-6 font-semibold'>
              {formateDate('2018')} - Present
            </span>
            <p className='text-base leading-6 font-medium text-textColor'>
              Freelance Makeup Artist
            </p>
          </li>

          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-base leading-6 font-semibold'>
              {formateDate('2018')} - Present
            </span>
            <p className='text-base leading-6 font-medium text-textColor'>
              Part-time Makeup Trainer
            </p>
            <p className='text-base leading-6 font-medium text-textColor'>
              At Apollo Makeup Academy, Kathmandu
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArtistAbout;
