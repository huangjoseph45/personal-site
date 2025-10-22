import React from "react";
import PreloadedImage from "../PreloadedImage";

const PersonalImage: React.FC<{
  ref: React.RefObject<HTMLDivElement | null>;
}> = ({ ref }) => {
  return (
    <div
      className="relative h-fit flex-col md:w-1/2 bg-primary hidden md:flex"
      ref={ref}
    >
      <LabeledArrow label="Me" offsetX={24} offsetY={20} />
      <LabeledArrow label="Not Me" offsetX={51} offsetY={25} />

      <PreloadedImage imageSrc="/me.jpg" />
    </div>
  );
};

export default PersonalImage;

const LabeledArrow: React.FC<{
  label: string;
  offsetX: number;
  offsetY: number;
}> = ({ label, offsetX, offsetY }) => {
  return (
    <div
      className={`absolute w-[8rem] z-20 stroke-black -rotate-30 rounded-full`}
      style={{
        left: `${offsetX}%`,
        top: `${offsetY}%`,
      }}
    >
      <div className="rotate-30 absolute -top-1/8 left-[40%] text-xl">
        {label}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="relative z-20"
      >
        <path
          d="M12 4V20M12 20L8 16M12 20L16 16"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="z-0 w-[1%] h-[70%] absolute left-1/2 top-1/2 -translate-1/2 shadow-tertiary shadow-xl" />
    </div>
  );
};
