import React from "react";

// Add to a div to make it look 3D
const ThreeDDiv: React.FC = () => {
  return (
    <div className="z-50 shadow-sm ">
      {/* right */}
      <div className="w-2 h-full absolute -top-[6px] -right-2 bg-bgtertiary z-[-10]  "></div>
      {/* top */}
      <div className="w-full h-2 absolute -top-[8px] -right-2 bg-bordersecondary z-[-11]  "></div>

      {/* corner */}
      <div className="z-40  -top-[8px] absolute left-full">
        <div className="border-r-[8px] border-t-[8px] w-0 h-0   border-l-[0px]  border-transparent border-l-bordersecondary border-t-bordersecondary absolute"></div>
        <div className="border-r-[8px] border-t-[8px] w-0 h-0  border-l-[0px]  border-transparent border-l-bgtertiary border-t-bgtertiary rotate-180 absolute"></div>
      </div>

      {/* top */}
      <div className="absolute -top-[8px] left-0 w-0 h-0 border-r-[8px] border-l-[12px] border-t-[8px] border-transparent border-l-bordersecondary border-t-bordersecondary rotate-180"></div>
      {/* right */}
      <div className="absolute bottom-[3px] -right-[11px] w-0 h-0 border-r-[8px] border-b-[8px] border-transparent border-r-bgtertiary border-b-bgtertiary border-l-[6px] rotate-270 flip scale-y-[-1] "></div>
    </div>
  );
};

export default ThreeDDiv;
