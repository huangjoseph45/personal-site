import React from "react";

const InputBox: React.FC<{
  label: string;
  large?: boolean;
  setInput: (value: string) => void;
}> = ({ label, large = false, setInput }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="capitalize mb-1">
        {label}:
      </label>
      {large ? (
        <textarea
          className="p-2 text-black bg-white rounded-md h-[10rem] focus:outline-none focus:ring-3 focus:ring-quarternary ring-offset-2 ring-offset-bgsecondary"
          onChange={handleChange}
        />
      ) : (
        <input
          type="text"
          name={label}
          className="p-2 text-black bg-white rounded-md focus:outline-none focus:ring-3 focus:ring-quarternary ring-offset-2 ring-offset-bgsecondary"
          autoComplete="email"
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default InputBox;
