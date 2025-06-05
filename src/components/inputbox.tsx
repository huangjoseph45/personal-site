import React from "react";

const InputBox: React.FC<{
  label: string;
  large?: boolean;
  setInput: (value: string) => void;
}> = ({ label, large = false, setInput }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="capitalize mb-1">
        {label}:
      </label>
      {large ? (
        <textarea className="p-2 text-black bg-white rounded-md h-[10rem]" />
      ) : (
        <input
          type="text"
          name={label}
          className="p-2 text-black bg-white rounded-md focus:outline-none focus:ring-3 focus:ring-quarternary ring-offset-2 ring-offset-bgsecondary"
          autoComplete="email"
        />
      )}
    </div>
  );
};

export default InputBox;
