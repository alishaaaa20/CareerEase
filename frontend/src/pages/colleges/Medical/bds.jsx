import React from "react";

import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const bds = () => {
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
                  href="http://iom.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Universal Colleges of Medical Sciences
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.bpkihs.edu/"
                  target="_blank"
                  className="text__link"
                >
                 KIST Medical College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.pahs.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Kantipur Dental College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://nams.edu.np/en"
                  target="_blank"
                  className="text__link"
                >
                  Chitawan Medical College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.naihs.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Gandaki Medical College
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:w-[470px] flex-1">
            <h1 className="text-left text-primaryColor mx-auto font-bold font-size-400 mt-[50px] ml-[190px]">
              KU Affiliated Colleges
            </h1>
            <ul className="mt-[50px] font-bold ml-[40px] text-left ml-[100px]">
              <li className="text__para">
                <a
                  href="https://manipal.edu/mu.html"
                  target="_blank"
                  className="text__link"
                >
                  Nobel Medical College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://cmsnepal.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Peoples Dental College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.ngmc.com.np"
                  target="_blank"
                  className="text__link"
                >
                  Kathmandu Medical College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://kmc.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Nepal Medical College and Teaching Hospital
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.nmcth.edu/"
                  target="_blank"
                  className="text__link"
                >
                  Kathmandu University School of Medical Sciences
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
                  Lumbini Medical College (Private)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default bds;
