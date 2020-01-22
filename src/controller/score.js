const creditCardService = require('../service/creditCard');
const cpfService = require('../service/cpf');

module.exports = {
  createScore: async (totalAmount, cpf, creditCard) => {
    const creditCardNumber = creditCardService.getCreditCardNumber(creditCard);
    console.log(`Calculating score for ${creditCardNumber}`);
    const creditCardScore = creditCardService.getCreditCardScore(creditCardNumber);
    console.log(`Calculated ${creditCardScore} for ${creditCardNumber}`);

    console.log(`Getting Trampo Certo information for ${cpf}`);
    try {
      const cpfRating = await cpfService.getCpfRating(cpf);
      console.log(`Got CPF Rating ${cpfRating} for ${cpf}`);
      return {
        totalAmount,
        creditCardScore,
        cpfRating,
      };
    } catch (e) {
      throw new Error(e.response.status);
    }
  },
};
