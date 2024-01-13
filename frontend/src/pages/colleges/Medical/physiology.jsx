import React from "react";
import pulogo from "../../../assets/images/purb.png";
import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const physiology = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
          List of Physiology colleges in different Universities.
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
                  href="http://iom.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                   Maharajgunj Medical Campus
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.bpkihs.edu/"
                  target="_blank"
                  className="text__link"
                >
                  B.P. Koirala Institute of Health and Sciences (Public)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.pahs.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Nepalese Army Institute of Health Sciences
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://nams.edu.np/en"
                  target="_blank"
                  className="text__link"
                >
                  National Medical College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.naihs.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                 Universal College of Medical Sciences and Teaching Hospital
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
            {/*-----makeup artist image-----*/}
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
                  href="https://manipal.edu/mu.html"
                  target="_blank"
                  className="text__link"
                >
                  Kathmandu University School of Medical Sciences
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://cmsnepal.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Lumbini Medical College and Teaching Hospital
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.ngmc.com.np"
                  target="_blank"
                  className="text__link"
                >
                  Manipal College of Medical Sciences
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://kmc.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                 Kathmandu Medical College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.nmcth.edu/"
                  target="_blank"
                  className="text__link"
                >
                  Nepal Medical College (Public)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.nobelmedicalcollege.com.np/"
                  target="_blank"
                  className="text__link"
                >
                  Nobel Medical College (Private)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://lmc.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Birat Medical College
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

export default physiology;