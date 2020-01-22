module.exports = {
  getCreditCardNumber: creditCard => `${creditCard.bin}-${creditCard.last4}`,
  getCreditCardScore: creditCardNumber => Math.random() * 10,
};
