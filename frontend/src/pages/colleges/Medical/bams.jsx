import React from "react";
import pulogo from "../../../assets/images/purb.png";
import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const bams = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
          List of BAMS colleges in different Universities.
        </p>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/*-----makeup artist image-----*/}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[600px] z-10 order-2 lg:order-1 ml-[50px] mt-[60px]">
              <img src={tulogo} alt="" height={300} width={300} />
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
              <h1 className="text-center text-primaryColor flex font-bold  mt-[50px] ml-[25px] text-xl">
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
        </div>
      </section>
     
    </>
  );
};

export default bams;