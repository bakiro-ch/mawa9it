import React from "react";
import Kaaba from "../../../components/icons/Kaaba";

const AlQibla = () => {
  return (
    <div className="flex gap-5 tracking-widest flex-col items-center justify-center h-screen ">
      <p className="font-Lexend font-semibold">Coming Soon</p>
      <div className="bg-primary shadow-xl/30 w-70 h-70 rounded-full relative flex gap-50 justify-center items-center">
        <div className="px-5 w-full h-full text-background absolute font-Lexend font-extrabold flex justify-between items-center">
          <p>W</p>
          <p>E</p>
        </div>{" "}
        <div className="py-5 w-full h-full text-background absolute font-Lexend font-extrabold flex flex-col justify-between items-center">
          <p>N</p>
          <p>S</p>
        </div>{" "}
        <div className="rotate-30 ">
          {" "}
          <div className="font-Lexend font-extrabold absolute  top-[-27px]">
            <Kaaba />
          </div>
          <div>
            {" "}
            <div className="w-0 h-0  border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[70px] border-b-secondary"></div>
            <div className="w-0 h-0  border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[70px] border-t-secondary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlQibla;
