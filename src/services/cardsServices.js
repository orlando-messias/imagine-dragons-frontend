const sortDragonsByName = (dragons) => {
  const sorted = dragons.sort((a,b) => a.name.localeCompare(b.name));
  return sorted;
};

module.exports = { sortDragonsByName };