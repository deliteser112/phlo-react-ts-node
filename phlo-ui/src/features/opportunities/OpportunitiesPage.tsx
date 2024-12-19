import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Filters from "../../components/Filters";
import OpportunitiesList from "./OpportunitiesList";
import { fetchOpportunities } from "../../utils/api";
import { Opportunity } from '../../types';

const OpportunitiesPage: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [queryParams, setQueryParams] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        const data = await fetchOpportunities(queryParams);
        setOpportunities(data);
      } catch (error) {
        console.error("Error loading opportunities:", error);
      }
    };

    loadOpportunities();
  }, [queryParams]);

  const handleSearch = (query: string) => {
    setQueryParams((prev) => ({ ...prev, search: query || undefined }));
  };

  const handleSort = () => {
    setQueryParams((prev) => ({
      ...prev,
      sort: prev.sort === "asc" ? "desc" : "asc",
    }));
  };

  const handleFilter = (filters: { chequeSize?: string; location?: string }) => {
    setQueryParams((prev) => ({ ...prev, ...filters }));
  };

  const handleClearFilters = () => {
    setQueryParams({});
  };

  const hasActiveFilters =
    !!queryParams.search || !!queryParams.chequeSize || !!queryParams.location;

  return (
    <div>
      <Banner />
      <Filters
        onSearch={handleSearch}
        onFilter={handleFilter}
        onSort={handleSort}
        onClearFilters={handleClearFilters}
        hasActiveFilters={hasActiveFilters}
        isSortDescending={queryParams.sort !== "asc"}
      />
      <div className="container mx-auto p-4">
        {opportunities.length > 0 ? (
          <OpportunitiesList opportunities={opportunities} />
        ) : (
          <div className="text-center text-gray-600 mt-10">No opportunities found.</div>
        )}
      </div>
    </div>
  );
};

export default OpportunitiesPage;
