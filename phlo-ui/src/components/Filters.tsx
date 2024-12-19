import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ComboBox from "./ComboBox";
import { FaSortAmountDownAlt, FaSortAmountUpAlt, FaTimes } from "react-icons/fa";

type FiltersProps = {
  onSearch: (query: string) => void;
  onFilter: (filters: { chequeSize?: string; location?: string }) => void;
  onSort: () => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  isSortDescending: boolean;
};

const Filters: React.FC<FiltersProps> = ({
  onSearch,
  onFilter,
  onSort,
  onClearFilters,
  hasActiveFilters,
  isSortDescending,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [chequeSize, setChequeSize] = useState<string | undefined>();
  const [location, setLocation] = useState<string | undefined>();

  // Handle search input
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  // Handle cheque size filter
  const handleChequeSizeChange = (value: string) => {
    setChequeSize(value);
    onFilter({ chequeSize: value, location });
  };

  // Handle location filter
  const handleLocationChange = (value: string) => {
    setLocation(value);
    onFilter({ chequeSize, location: value });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setChequeSize(undefined);
    setLocation(undefined);
    onClearFilters();
  };

  return (
    <div className="container mx-auto p-4 bg-white border-b border-gray-300">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Search Box and Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
          <SearchBox value={searchQuery} onChange={handleSearchChange} />

          <div className="flex flex-wrap space-x-4">
            <button
              className="flex items-center text-gray-700 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200"
              onClick={onSort}
              aria-label="Sort Results"
            >
              {isSortDescending ? (
                <FaSortAmountDownAlt className="mr-2" />
              ) : (
                <FaSortAmountUpAlt className="mr-2" />
              )}
              Sort
            </button>
            <button
              onClick={handleClearFilters}
              disabled={!hasActiveFilters}
              className={`flex items-center bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-full ${
                hasActiveFilters ? "hover:bg-gray-200" : "opacity-50 cursor-not-allowed"
              }`}
              aria-label="Clear Filters"
            >
              <FaTimes className="mr-2" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-col justify-end md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
          <ComboBox
            label="Cheque Sizes"
            options={CHEQUE_SIZE}
            onChange={handleChequeSizeChange}
            value={chequeSize}
          />
          <ComboBox
            label="Location"
            options={LOCATIONS}
            onChange={handleLocationChange}
            value={location}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;

const CHEQUE_SIZE = ["<$100k", "<$250k", "<$500k", "<$750k", ">$750"];
const LOCATIONS = ["United Kingdom", "Switzerland", "Belgium"];