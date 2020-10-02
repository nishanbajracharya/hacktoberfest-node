const axios = require('axios');
const { API } = require('./constants');

const instance = axios.create({
  baseURL: API.BASE_URL
});

module.exports = {
  http: instance,
};