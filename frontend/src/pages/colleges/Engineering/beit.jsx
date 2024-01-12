import React from "react";
import pokh from "../../../assets/images/pulogo.png";
import pulogo from "../../../assets/images/purb.png";
import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const beit = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
        List of BEIt colleges affiliatated to different universities.
        </p>
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
                    href="https://cosmoscollege.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Cosmos Engineering College (Public)
                  </a>
                </li>

                <li className="text__para">
                  <a
                    href="https://www.eemc.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Everest Engineering College (Private)
                  </a>
                </li>
              
                
                <li className="text__para">
                  <a
                    href="https://ncit.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                   Nepal college of Information Technology(Private)
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

export default beit;
