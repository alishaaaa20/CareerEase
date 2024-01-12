import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about.png";

const AboutComponent = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="xl:w-[700px]">
            <h2
              className="heading text-primaryColor mt-[35px] text-center"
              id="about"
            >
              Why Us?
            </h2>
            <p className="text__para">
              CareerEase is an interactive platform designed to help 12th grade
              passed-out students navigate the diverse world of careers,
              providing insights, information, and a supportive community to
              assist them on their journey.
            </p>
            <p className="text__para mt-[30px]">
              By offering an in-depth exploration of various professions,
              including fields like medicine, engineering, management, the arts,
              and many more versatile paths, the platform provides valuable
              insights into interested fields with suitable colleges. CareerEase
              goes beyond a mere informational resource; it fosters a dynamic
              community where students can ask questions, seek advice from
              experienced professionals, and share their own experiences. This
              supportive ecosystem not only reduces decision anxiety but also
              builds confidence and resilience in students, creating a lasting
              impact on their academic and professional journeys.
            </p>
            <Link to="/services">
              <button className="btn">Learn More</button>
            </Link>
          </div>
          {/*-----about image-----*/}
          <div className="relative z-10 xl:w-[500px] flex justify-center mt-[50px] lg:mt-0 ">
            <img src={aboutImg} className="w-6/6" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
