import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBox: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm w-full md:w-auto">
      <FaSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        aria-label="Search Opportunities"
        className="bg-transparent focus:outline-none w-full md:w-auto text-gray-700 placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBox;
