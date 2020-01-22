const alasql = require('alasql');

module.exports = {
  getCreditCardNumber: creditCard => `${creditCard.bin}-${creditCard.last4}`,
  getCreditCardScore: creditCardNumber => {
    const response = alasql(
      `
      SELECT
        SUM(score) AS score
      FROM
        credit_card_transactions cct
      JOIN
        transaction_status ts ON ts.transaction_id = cct.transaction_id
      JOIN
        transaction_status_score tss ON tss.transaction_status = ts.status
      WHERE
        cct.credit_card = $creditCardNumber
    `,
      {
        creditCardNumber,
      }
    );
    return response[0].score;
  },
};
