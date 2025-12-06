import React from "react";
import V1 from "../assets/vector1.png";
import V2 from "../assets/vector2.png";

const Banner = ({ solution, pro }) => {
  return (
    <div className="flex flex-col md:flex-row justify-around mt-20 container mx-auto gap-6 px-10 relative">
      <div className="bg-gradient-to-bl relative from-[#632EE3] to-[#9F62F2] rounded-xl">
        <div className=" absolute font-bold items-center w-full h-full justify-center flex flex-col">
          <span className="text-white text-2xl">In-Progress</span>
          <span className="text-white text-3xl">{pro}</span>
        </div>
        <div className="flex gap-25">
          <img className="w-60 h-55" src={V1} alt="" />
          <img className="scale-x-[-1] w-60 h-55" src={V1} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-bl relative from-[#54CF68] to-[#00827A] rounded-xl">
        <div className=" absolute font-bold items-center w-full h-full justify-center flex flex-col">
          <span className="text-white text-2xl">Resolved</span>
          <span className="text-white text-3xl">{solution}</span>
        </div>
        <div className="flex gap-25">
          <img className="w-60 h-55" src={V1} alt="" />
          <img className="scale-x-[-1] w-60 h-55" src={V1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
