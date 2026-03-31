import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
      <div className="px-38 flex justify-evenly items-center gap-1">
        <div className=" w-170 space-y-3">
          <h3 className="bg-[#E1E7FF] w-70 text-center rounded-xl px-3 py-1"><FaCircleDot className="inline text-blue-300" /> <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">New: AI-Powered Tools Available</span></h3>

          <h3 className="font-extrabold text-7xl">Supercharge Your Digital Workflow</h3>

          <p className="">Access premium AI tools, design assets, templates, and productivity
            software—all <br /> in one place. Start creating faster today. Explore
            Products</p>

            <button className="font-semibold text-xl px-5 py-2 text-white rounded-3xl bg-gradient-to-r from-blue-700 to-purple-700 mr-3">Explore Products</button>

            <button className="font-semibold text-xl px-5 py-2 text-white rounded-3xl border-purple-500 border"><span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent"><CiPlay1 className="inline text-purple-700" /> Get Started </span></button> 
        </div>

        <div>
          <img src="./banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
