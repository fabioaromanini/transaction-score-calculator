const creditCardService = require('../service/creditCard');

module.exports = {
  createScore: (totalAmount, cpf, creditCard) => {
    const creditCardNumber = creditCardService.getCreditCardNumber(creditCard);
    console.log(`Calculating score for ${creditCardNumber}`);
    const creditCardScore = creditCardService.getCreditCardScore(creditCardNumber);
    console.log(`Calculated ${creditCardScore} for ${creditCardNumber}`);
    return {
      TOTAL_AMOUNT: totalAmount,
      CC_SCORE: creditCardScore,
      CPF_RATING: Math.random(),
    };
  },
};
