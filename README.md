# Transaction Score Calculator

Rest API for calculating financial transactions scores, given a list of fake credit card transactions and another API, [trampo certo rating](https://github.com/fabioaromanini/trampo-certo-rating), that provides fake CPF scores (CPF is a SSN-like document for brazilians).

### TODO

**Core**

- Copy serverles and circle-ci boilerplate from trampo certo
- Mock list of credit-card transactions
- Endpoint for transaction score calculation
  - Calculate Credit Card score with SQL
  - Integrate with trampo certo

**Extra**

- Persist scores in dynamo
- Allow scores retrieval by:
  - CPF
  - Credit Card

### Done
