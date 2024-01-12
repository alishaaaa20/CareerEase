import React from "react";

import { medical } from "../../../assets/data/courses/medical";
import MedicalCard from "./MedicalCard";

const MedicalList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {medical.map((item, index) => (
        <MedicalCard item={item} index={index} key={index} />
      ))}
    </div>
  );
};
export default MedicalList;
