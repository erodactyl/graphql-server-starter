const random = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

module.exports = random;
