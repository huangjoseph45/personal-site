import React from "react";

// Add to a div to make it look 3D
const ThreeDDiv: React.FC = () => {
  return (
    <div className="-z-[1]">
      <div className="shadow-sm w-full h-full absolute -top-[6px] left-2 bg-bgtertiary -z-10  "></div>
      <div className="absolute -top-[6px] left-0 w-0 h-0 border-r-[8px] border-l-[12px] border-t-[8px] border-transparent border-l-bgtertiary border-t-bgtertiary rotate-180"></div>
      <div className="absolute bottom-[2px] -right-[.63rem] w-0 h-0 border-r-[8px] border-b-[8px] border-transparent border-r-bgtertiary border-b-bgtertiary border-l-[4px] rotate-270 flip scale-y-[-1] "></div>
    </div>
  );
};

export default ThreeDDiv;
