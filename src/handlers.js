const scoreController = require('./controller/score');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

module.exports = {
  calculateScore: async event => {
    const { cpf, cc, total_amount: totalAmount } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(scoreController.createScore(totalAmount, cpf, cc)),
      headers: corsHeaders,
    };
  },
};
