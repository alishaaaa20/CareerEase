import React from "react";
import pulogo from "../../../assets/images/purb.png";
import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const bpt = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
          List of BPT colleges in different Universities.
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
                  Institute of Medicine (Public)
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
                  Patan Academy of Health Sciences (Public)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://nams.edu.np/en"
                  target="_blank"
                  className="text__link"
                >
                  National Academy of Medical Sciences (Public)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.naihs.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  NAIHS College of Medical Sciences (Army)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="http://www.gmc.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Gandaki Medical College (Private)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.cmc.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Chitwan Medical College (Private)
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
                  Manipal College of Medical Science (Public)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://cmsnepal.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  College of Medical Science (Private)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.ngmc.com.np"
                  target="_blank"
                  className="text__link"
                >
                  Nepalgunj Medical College (Private)
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://kmc.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Kathmandu Medical College (Private)
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

export default bpt;
