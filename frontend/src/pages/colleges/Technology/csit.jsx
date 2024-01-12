import React from "react";
import tulogo from "../../../assets/images/tu.jpg";

const csit = () => {
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
          </div>
        </div>
      </section>
    </>
  );
};

export default csit;
