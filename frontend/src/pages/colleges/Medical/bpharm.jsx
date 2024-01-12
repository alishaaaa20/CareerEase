import React from "react";

const bpharm = () => {
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
                  href="https://mmciom.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Maharajgunj Medical Campus
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.mmihs.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Manmohan Institute of Health Sciences
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.facebook.com/uihsbwp/"
                  target="_blank"
                  className="text__link"
                >
                  Universal Institute of Health Sciences
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.collegenp.com/college/janamaitri-foundation-institute-of-health-sciences-kathmandu/"
                  target="_blank"
                  className="text__link"
                >
                  Janmaitri Foundation (LA)
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
                  href="https://sos.ku.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Kathmandu University School of Sciences
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:w-[470px] flex-1">
            <h1 className="text-left text-primaryColor mx-auto font-bold font-size-400 mt-[50px] ml-[190px]">
              Pokhara Affiliated Colleges
            </h1>
            <ul className="mt-[50px] font-bold ml-[40px] text-left ml-[100px]">
              <li className="text__para">
                <a
                  href="https://pushas.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  School of Health and Allied Sciences
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://cist.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Cist College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://nobelcollege.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Nobel College
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:w-[470px] flex-1">
            <h1 className="text-left text-primaryColor mx-auto font-bold font-size-400 mt-[50px] ml-[190px]">
              Purbanchal Affiliated Colleges
            </h1>
            <ul className="mt-[50px] font-bold ml-[40px] text-left ml-[100px]">
              <li className="text__para">
                <a
                  href="https://edusanjal.com/college/school-of-medicine-and-allied-health-sciences-mtu/"
                  target="_blank"
                  className="text__link"
                >
                  School of Medical and Allied Health Sciences
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://www.facebook.com/acas.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Asian College of Advanced Science
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default bpharm;
