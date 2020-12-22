const axios = require('axios');
const { AIRTABLE_API_KEY } = process.env;
axios.defaults.baseURL = 'https://api.airtable.com/v0/appFMk4lYW96cxPfu';
axios.defaults.headers.common['Authorization'] = `Bearer ${AIRTABLE_API_KEY}`;

exports.handler = async (event, context) => {
  return axios.get(`/Phases?view=Grid%20view`)
    .then(response => {
      const body = response.data.records ? response.data.records : []
      return ({
        statusCode: 200,
        body: JSON.stringify(body)
      })
    })
    .catch(() => ({statusCode: 200, body: "[]"}))
}
