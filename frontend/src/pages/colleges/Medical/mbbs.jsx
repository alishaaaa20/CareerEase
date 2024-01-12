import React from "react";

const mbbs = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="heading text-center text-primaryColor mx-auto">
            Courses
          </h2>
          <p className="text__para text-center">
            List of courses available in Medical field.
          </p>
          <div className="xl:w-[470px] ">
            <div className="container">
              <h2 className="heading text-center text-primaryColor mx-auto">
                TU Affiliated Colleges
              </h2>
              <ul className="mt-[50px] font-bold">
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

export default mbbs;
