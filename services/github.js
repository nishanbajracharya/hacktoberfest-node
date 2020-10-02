const { API } = require('../constants');
const { http } = require('../utils/http');

function getUserInfo(user) {
  return http.get(API.USER + '/' + user);
}

function getPRs(user, date) {
  return http.get(`${API.ISSUES}?q=author:${user}+is:pr+created:${date}-10-01T00:00:00Z..${date}-11-01T00:00:00Z`)
}

module.exports = {
  getUserInfo,
  getPRs,
}