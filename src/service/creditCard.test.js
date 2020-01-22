const creditCardService = require('./creditCard');

describe('GetCreditCardNumber', () => {
  test('Returns credit card number for valid credit card', () => {
    const creditCard = {
      bin: '9454832',
      last4: '5069',
    };

    expect(creditCardService.getCreditCardNumber(creditCard)).toMatch('9454832-5069');
  });

  test('Throws exception on invalid credit card', () => {
    expect(() =>
      creditCardService.getCreditCardNumber({
        bin: '9454832',
      })
    ).toThrow();

    expect(() =>
      creditCardService.getCreditCardNumber({
        last4: '5069',
      })
    ).toThrow();
  });
});
