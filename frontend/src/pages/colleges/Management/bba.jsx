import React from "react";
import pokh from "../../../assets/images/pulogo.png";
import pulogo from "../../../assets/images/purb.png";
import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const bba = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
          List of BBA colleges in different Universities.
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
                    href="https://thamescollege.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Thames International College
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://davcollege.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    DAV College of Management
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://kathford.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Kathford International College of Engineering and Management
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://kcmit.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Kantipur College of Management and Information Technology(KCMIT)
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://www.padmashreecollege.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Padmashree International College
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
                    href="https://kusom.edu.np/"
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
                    href="https://kcc.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Kantipur City College
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
              <img src={pokh} alt="" height={300} width={300} />
            </div>
            <div className="xl:w-[470px] ">
              <h1 className=" text-center text-primaryColor flex font-bold  mt-[50px] ml-[40px] text-xl">
                PoU Affiliated Colleges
              </h1>
              <ul className="mt-[50px] font-bold ml-[40px] text-left ml-[100px]">
                <li className="text__para">
                  <a
                    href="https://apexcollege.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Apex College
                  </a>
                </li>

                <li className="text__para">
                  <a
                    href="https://shubhashreecollege.com/"
                    target="_blank"
                    className="text__link"
                  >
                    Shubhashree College of Management
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://ace.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Ace Institute of Management
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

export default bba;
