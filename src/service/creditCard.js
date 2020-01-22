module.exports = {
  getCreditCardNumber: creditCard => `${creditCard.bin}-${creditCard.last4}`,
};
