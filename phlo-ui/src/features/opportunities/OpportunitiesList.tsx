import React from "react";
import OpportunityCard from "./OpportunityCard";

type Opportunity = {
  id: number;
  title: string;
  description: string;
  location: string;
  deadline: string;
  cheque_size: string;
  type: string;
  matching_score: number;
  logoUrl?: string;
};

type Props = {
  opportunities: Opportunity[];
};

const OpportunitiesList: React.FC<Props> = ({ opportunities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {opportunities.map((opportunity) => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
};

export default OpportunitiesList;
