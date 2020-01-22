const creditCardService = require('../service/creditCard');

module.exports = {
  createScore: (totalAmount, cpf, creditCard) => {
    const creditCardScore = creditCardService.getCreditCardNumber(creditCard);
    return {
      TOTAL_AMOUNT: totalAmount,
      CC_SCORE: Math.random() * 10,
      CPF_RATING: Math.random(),
    };
  },
};
