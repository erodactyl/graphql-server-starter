const arrayFrom = (count, creator) => {
  return new Array(count)
    .fill(null)
    .map(creator);
};

module.exports = arrayFrom;
