const calculateScore = (min, max, inclusive) => {
  if (inclusive) return Math.floor(Math.random() * (max - min + 1)) + min;
  else return Math.random() * (max - min) + min;
};

module.exports = {
  getNumericRating: rating => {
    switch (rating) {
      case 'good':
        return calculateScore(0, 0.5);
      case 'bad':
        return calculateScore(0.50000000000001, 1);
      default:
        return null;
    }
  },
};
