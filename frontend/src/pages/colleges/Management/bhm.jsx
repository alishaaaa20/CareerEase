import React from "react";
import pokh from "../../../assets/images/pulogo.png";
import pulogo from "../../../assets/images/purb.png";
import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const bhm = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
          List of BHM colleges in different Universities.
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
                    href="https://www.nccs.edu.np/college"
                    target="_blank"
                    className="text__link"
                  >
                    National College of Computer Studies
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://goldengateintl.com/"
                    target="_blank"
                    className="text__link"
                  >
                    GoldenGate International College
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://nathm.gov.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Nepal Academy of Tourism and Hotel Management (NATHM)

                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://nesfield.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Nesfield International College
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
                    href="https://quest.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Quest International College
                  </a>
                </li>

                <li className="text__para">
                  <a
                    href="https://www.platinumcollege.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Platinum Management College
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://medhavicollege.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Medhavi College
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

export default bhm;
