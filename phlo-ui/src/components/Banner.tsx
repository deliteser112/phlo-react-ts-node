import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="container bg-white p-8 flex flex-col md:flex-row items-center md:space-x-6 mx-auto">
      <img
        src="/images/funding_banner.png"
        alt="Funding Opportunities Banner"
        className="w-32 md:w-48 object-contain mb-4 md:mb-0"
      />

      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Funding Opportunities
        </h1>
        <p className="text-gray-600 max-w-md">
          The ValleyDAO community is made up of Growers. They collectively help
          both the organization and one another grow.
        </p>
      </div>
    </div>
  );
};

export default Banner;
