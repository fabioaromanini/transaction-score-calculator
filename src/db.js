const alasql = require('alasql');

alasql(
  `CREATE TABLE credit_card_transactions (
  transaction_id STRING,
  credit_card STRING
);
`
);

alasql(
  `CREATE TABLE transaction_status (
  transaction_id STRING,
  status STRING
);
`
);

alasql(
  `CREATE TABLE transaction_status_score (
  transaction_status STRING,
  score NUMBER
);
`
);

alasql(
  `INSERT INTO credit_card_transactions VALUES 
("transacao1","9454832-5069"),
("transacao2","9454832-5069"),
("transacao3","9454832-5069"),
("transacao4","9454832-5069");
`
);

alasql(
  `INSERT INTO transaction_status VALUES 
("transacao1", "approved"),
("transacao2", "approved"),
("transacao3", "pending"),
("transacao4", "declined");
`
);

alasql(
  `INSERT INTO transaction_status_score VALUES 
("approved",-1),
("pending",0),
("declined",5);
`
);
