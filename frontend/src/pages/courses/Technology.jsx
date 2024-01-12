import React from "react";
import ServiceCard from "../../components/Services/ServiceCard.jsx";

import { technology } from "../../assets/data/courses/technology.js";

const Technology = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-primaryColor">Courses</h2>
            <p className="text__para text-center">
              List of courses available in Technology.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
            {technology.map((item, index) => (
              <ServiceCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
