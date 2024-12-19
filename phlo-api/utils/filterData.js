const filterByChequeSize = (opportunity, chequeSize) => {
  const value = parseInt(chequeSize.replace(/[^\d]/g, ""), 10);
  const isGreaterThan = chequeSize.startsWith(">");

  const opportunityValue = parseInt(opportunity.cheque_size.replace(/[^\d]/g, ""), 10);

  return isGreaterThan ? opportunityValue > value : opportunityValue <= value;
};


const filterData = (data, { search, chequeSize, location, sort }) => {
  let results = data;

  // Search
  if (search) {
    const searchText = search.toLowerCase();
    results = results.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)
    );
  }

  // Filter by Cheque Size
  if (chequeSize) {
    results = results.filter((item) => filterByChequeSize(item, chequeSize));
  }

  // Filter by Location
  if (location) {
    results = results.filter((item) => item.location === location);
  }

  // Sorting
  if (sort) {
    results = results.sort((a, b) =>
      sort === "asc" ? a.matching_score - b.matching_score : b.matching_score - a.matching_score
    );
  }

  return results;
};

module.exports = filterData;
