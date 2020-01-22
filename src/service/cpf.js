const axios = require('axios');

const cpfRatingsClient = axios.create({
  baseURL: 'https://qvdbscsen0.execute-api.us-east-1.amazonaws.com/dev/',
});

module.exports = {
  getCpfRating: async cpf => {
    const {
      data: { rating: cpfRating },
    } = await cpfRatingsClient.get('/cpf_query', {
      params: {
        cpf,
      },
    });
    return cpfRating;
  },
};
