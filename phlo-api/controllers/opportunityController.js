const { getFilteredOpportunities } = require("../services/opportunityService");

const getOpportunities = (req, res) => {
  try {
    const { search, chequeSize, location, sort } = req.query;
    const results = getFilteredOpportunities({ search, chequeSize, location, sort });
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getOpportunities };
