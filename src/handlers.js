const scoreController = require('./controller/score');
require('./db');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

module.exports = {
  calculateScore: async event => {
    const { cpf, cc, total_amount: totalAmount } = JSON.parse(event.body);
    const score = await scoreController.createScore(totalAmount, cpf, cc);
    return {
      statusCode: 200,
      body: JSON.stringify({
        TOTAL_AMOUNT: score.totalAmount,
        CC_SCORE: score.creditCardScore,
        CPF_RATING: score.cpfRating,
      }),
      headers: corsHeaders,
    };
  },
};
