import React from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
};

const ComboBox: React.FC<Props> = ({ label, options, value, onChange }) => {
  return (
    <div className="relative w-full md:w-auto min-w-[200px]">
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 cursor-pointer"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
        <IoIosArrowDown className="w-5 h-5" />
      </div>
    </div>
  );
};

export default ComboBox;
