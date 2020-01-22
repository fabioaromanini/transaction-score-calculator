const creditCardService = require('../service/creditCard');
const trampoCertoService = require('../service/trampoCerto');

module.exports = {
  createScore: async (totalAmount, cpf, creditCard) => {
    if (!totalAmount || typeof totalAmount !== 'number') throw new Error(400);

    const creditCardNumber = creditCardService.getCreditCardNumber(creditCard);
    console.log(`Calculating score for ${creditCardNumber}`);
    const creditCardScore = creditCardService.getCreditCardScore(creditCardNumber);
    console.log(`Calculated ${creditCardScore} for ${creditCardNumber}`);

    console.log(`Getting Trampo Certo information for ${cpf}`);
    try {
      const cpfRating = await trampoCertoService.getCpfRating(cpf);
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
