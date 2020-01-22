const _ = require('lodash');
const cpfService = require('./cpf');

describe('GetNumericRating', () => {
  test('Output is null for unknown rating', () => {
    expect(cpfService.getNumericRating('unknown')).toBeNull();
  });

  test('Output is between 0 and 0.5 for good rating', () => {
    _.range(10).map(() => {
      const numericRating = cpfService.getNumericRating('good');
      expect(numericRating).toBeGreaterThanOrEqual(0.0);
      expect(numericRating).toBeLessThanOrEqual(0.5);
    });
  });

  test('Output is greather than 0.5 and less or equal to 10 for bad rating', () => {
    _.range(10).map(() => {
      const numericRating = cpfService.getNumericRating('bad');
      expect(numericRating).toBeGreaterThan(0.5);
      expect(numericRating).toBeLessThanOrEqual(1.0);
    });
  });
});
