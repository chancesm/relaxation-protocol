const { parse } = require('querystring');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: 'HTTP Method Unavailable' };

  let body = {}
  console.log(event)
  
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    body = parse(event.body)
  }

  return {
    statusCode: 200,
    body: 'test function response',
  }
}
