import React from "react";
import pokh from "../../../assets/images/pulogo.png";
import pulogo from "../../../assets/images/purb.png";
import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const bmtm = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
          List of courses available in the Management field.
        </p>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
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
                    href="http://iom.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Nepal Academy of Tourism and Hotel Management
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://www.bpkihs.edu/"
                    target="_blank"
                    className="text__link"
                  >
                    Nepal College of Travel & Tourism Management
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://www.pahs.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Public Youth Campus
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://nams.edu.np/en"
                    target="_blank"
                    className="text__link"
                  >
                    Valley College Hospitality and Tourism Management
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://www.naihs.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    K and K International College
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[600px] z-10 order-2 lg:order-1 ml-[100px] mt-[100px] ">
              <img src={kulogo} alt="" height={300} width={300} />
            </div>
            <div className="xl:w-[470px] ">
              <h1 className=" text-center text-primaryColor flex font-bold  mt-[50px] ml-[40px] text-xl">
                KU Affiliated Colleges
              </h1>
              <ul className="mt-[50px] font-bold ml-[40px] text-left ml-[100px]">
                <li className="text__para">
                  <a
                    href="https://cmsnepal.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Little Angels College of Management
                  </a>
                </li>

                <li className="text__para">
                  <a
                    href="https://kmc.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Nepal College of Management
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://www.nmcth.edu/"
                    target="_blank"
                    className="text__link"
                  >
                   Kathmandu University School of Management
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[600px] z-10 order-2 lg:order-1 ml-[50px] mt-[60px]">
              <img src={pulogo} alt="" height={300} width={300} />
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
              <h1 className="text-center text-primaryColor flex font-bold  mt-[50px] ml-[25px] text-xl">
                PU Affiliated Colleges
              </h1>
              <ul className="mt-[50px] font-bold ml-[40px] text-left ml-[100px]">
                <li className="text__para">
                  <a
                    href="https://nagarikhealthsciences.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Kathmandu Academy of Tourism and Hospitality
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
export default bmtm;
