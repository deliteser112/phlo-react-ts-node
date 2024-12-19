import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { Opportunity } from '../../types';

type Props = {
  opportunity: Opportunity;
};

// Function to get matching score styles
const getMatchingScoreStyles = (score: number) => {
  if (score >= 85) {
    return { bg: "bg-green-50", text: "text-green-800" };
  } else if (score >= 55) {
    return { bg: "bg-yellow-50", text: "text-yellow-800" };
  } else {
    return { bg: "bg-red-50", text: "text-red-800" };
  }
};

const OpportunityCard: React.FC<Props> = ({ opportunity }) => {
  const { bg, text } = getMatchingScoreStyles(opportunity.matching_score);
  const logoURL =
    opportunity.logoUrl || `/images/${Number(opportunity.id % 6 + 1)}.png`;

  return (
    <div className="bg-[#FFFAFA] border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4">
      <div className="flex justify-between items-start">
        <img
          src={logoURL}
          alt={`${opportunity.title} Logo`}
          className="w-32 object-contain"
        />

        {/* Matching Score */}
        <div
          className={`${bg} ${text} text-sm font-medium px-3 py-1 rounded-lg text-right`}
        >
          <div className="flex items-center space-x-1">
            <span>Matching Score</span>
            <AiOutlineInfoCircle className="w-4 h-4" />
          </div>
          <span className="font-bold text-xl">{opportunity.matching_score}%</span>
        </div>
      </div>

      {/* Title and Description */}
      <div>
        <h3 className="text-lg font-bold text-gray-800">{opportunity.title}</h3>
        <p className="text-gray-600 text-sm">
          {opportunity.description.length > 100
            ? `${opportunity.description.slice(0, 200)}...`
            : opportunity.description}
        </p>
      </div>

      {/* Topics */}
      <div>
        <h4 className="text-sm font-semibold text-gray-500">Topics</h4>
        <div className="flex space-x-2 mt-1">
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
            Renewable Energy
          </span>
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
            Innovation
          </span>
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
            +3
          </span>
        </div>
      </div>

      {/* Location, Deadline, Cheque Size, Type */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <h5 className="font-semibold text-gray-500">Location</h5>
          <p>{opportunity.location}</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-500">Deadline</h5>
          <p>{opportunity.deadline}</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-500">Cheque Size</h5>
          <p>{opportunity.cheque_size}</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-500">Type</h5>
          <p>{opportunity.type}</p>
        </div>
      </div>

      {/* Rate This Recommendation */}
      <div className="bg-orange-100 text-orange-700 text-sm p-4 rounded-lg flex justify-between items-center">
        <div>
          <p className="font-semibold">Rate this recommendation</p>
          <p className="text-xs">Help us improve your recommendations</p>
        </div>
        <div className="flex space-x-4">
          <FaThumbsDown className="text-red-500 cursor-pointer" />
          <FaThumbsUp className="text-green-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
