# Transaction Score Calculator

[![CircleCI](https://circleci.com/gh/fabioaromanini/transaction-score-calculator.svg?style=svg)](https://circleci.com/gh/fabioaromanini/transaction-score-calculator)

Rest API for calculating financial transactions scores, given a list of fake credit card transactions and another API, [trampo certo rating](https://github.com/fabioaromanini/trampo-certo-rating), that provides fake CPF scores (CPF is a SSN-like document for brazilians).

## Endpoints

POST
https://y7k9rzavhe.execute-api.us-east-1.amazonaws.com/prod/score

Expected request
```json
{
  "total_amount": 87.99,
  "cpf":"94548325069",
  "cc": {
  "bin":"548110",
  "last4":"2104"
}
```

Expected response
```json
{
  "TOTAL_AMOUNT": 87.99,
  "CPF_RATING": 0.0,
  "CC_SCORE": 3.0
}
```

### TODO

**Core**

- ~~Copy serverless and circle-ci boilerplate from trampo certo~~
- ~~Mock SQL data~~
- ~~Endpoint for transaction score calculation~~
  - ~~Calculate Credit Card score with SQL~~
  - ~~Integrate with trampo certo~~
  - ~~Calculate numeric CPF rating~~

**Extra**

- Persist scores in dynamo
- Allow scores retrieval by:
  - CPF
  - Credit Card

### Done

1. Copy serverless and circle-ci boilerplate from trampo certo
2. Mock SQL data
3. Endpoint for transaction score calculation
