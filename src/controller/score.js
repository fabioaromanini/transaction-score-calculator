const cpfService = require('../service/cpf');
const creditCardService = require('../service/creditCard');
const trampoCertoService = require('../service/trampoCerto');

module.exports = {
  createScore: async (totalAmount, cpf, creditCard) => {
    if (!totalAmount || typeof totalAmount !== 'number') throw new Error(400);

    const creditCardNumber = creditCardService.getCreditCardNumber(creditCard);
    console.log(`Calculating score for ${creditCardNumber}`);
    const creditCardScore = creditCardService.getCreditCardScore(creditCardNumber);
    console.log(`Calculated ${creditCardScore} for ${creditCardNumber}`);

    try {
      const trampoCertoRating = await trampoCertoService.getCpfRating(cpf);
      console.log(`Got trampo certo rating ${trampoCertoRating} for ${cpf}`);
      const cpfRating = cpfService.getNumericRating(trampoCertoRating);
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
