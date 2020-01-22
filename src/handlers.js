const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

module.exports = {
  cpfQuery: async event => {
    return {
      statusCode: 200,
      body: 'bar',
      headers: corsHeaders,
    };
  },
};