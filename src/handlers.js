const scoreController = require('./controller/score');
require('./db');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

module.exports = {
  calculateScore: async event => {
    const { cpf, cc, total_amount: totalAmount } = JSON.parse(event.body);
    let statusCode;
    let body;
    try {
      const score = await scoreController.createScore(totalAmount, cpf, cc);
      statusCode = 200;
      body = JSON.stringify({
        TOTAL_AMOUNT: score.totalAmount,
        CC_SCORE: score.creditCardScore,
        CPF_RATING: score.cpfRating,
      });
    } catch (e) {
      statusCode = e.message;
      body = JSON.stringify(
        `Request format: { cpf: "string", total_amount: "number", cc: { bin: "string", last4: "string" }}`
      );
    } finally {
      return {
        statusCode,
        headers: corsHeaders,
        body,
      };
    }
  },
};
