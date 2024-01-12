import React from "react";

const bams = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
          List of courses available in the Medical field.
        </p>
        <div className="flex">
          <div className="xl:w-[470px] flex-1">
            <h1 className="text-left text-primaryColor mx-auto font-bold font-size-400 mt-[50px] ml-[100px]">
              TU Affiliated Colleges
            </h1>
            <ul className="mt-[50px] font-bold ml-[40px]">
              <li className="text__para text-left">
                <a
                  href="https://www.facebook.com/NAMCBRJ/"
                  target="_blank"
                  className="text__link"
                >
                 Nepal Ayurved medical college (Public) 
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://patanjalinepal.org/"
                  target="_blank"
                  className="text__link"
                >
                 Patanjali Ayurved Medical College(private)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://ayurvedacampus.edu.np/public/"
                  target="_blank"
                  className="text__link"
                >
                 Ayurveda Campus(private)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.collegenp.com/college/central-ayurveda-vidyapeetha-dang/"
                  target="_blank"
                  className="text__link"
                >
                 Central Ayurveda Vidyapeetha(private)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.collegenp.com/college/mithila-ayurveda-college-and-research-center-dhanusa/"
                  target="_blank"
                  className="text__link"
                >
                 Mithila Ayurveda College and Research Center(private)
                </a>
              </li>
              
              
            </ul>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default bams;
