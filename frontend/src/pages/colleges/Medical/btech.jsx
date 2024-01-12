import React from "react";

const btech = () => {
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
                  href="https://cdbt.tu.edu.np/pages/phd-685"
                  target="_blank"
                  className="text__link"
                >
                  Central Department of Biotechnology
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://nacolnist.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  National College (NACOL)-NIST
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://stc.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Sunsari Technical College
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
                  Kathmandu University School of Science
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
                  href="https://sann.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  SANN International College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://whitehousecmt.edu.np/"
                  target="_blank"
                  className="text__link"
                >
                  Himalayan WhiteHouse International College
                </a>
              </li>
              <li className="text__para">
                <a
                  href="https://kvc.com.np/"
                  target="_blank"
                  className="text__link"
                >
                  Kantipur Valley College
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:w-[470px] flex-1">
            <h1 className="text-left text-primaryColor mx-auto font-bold font-size-400 mt-[50px] ml-[190px]">
              Agriculture and Forestry University
            </h1>
            <ul className="mt-[50px] font-bold ml-[40px] text-left ml-[100px]">
              <li className="text__para">
                <a
                  href="https://afu.edu.np/center-biotechnology"
                  target="_blank"
                  className="text__link"
                >
                  Center for Biotechnology, Agriculture and Forestry University
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default btech;
