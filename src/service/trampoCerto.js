const axios = require('axios');

const { TRAMPO_CERTO_URL } = process.env;

const cpfRatingsClient = axios.create({
  baseURL: TRAMPO_CERTO_URL,
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
