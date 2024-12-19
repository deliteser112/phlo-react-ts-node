const opportunities = require("../data/opportunities.json");
const filterData = require("../utils/filterData");

const getFilteredOpportunities = (query) => {
  return filterData(opportunities, query);
};

module.exports = { getFilteredOpportunities };
