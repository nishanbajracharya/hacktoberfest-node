const { argv } = require('yargs');

const { http } = require('./http');
const { API, PR } = require('./constants');
const { getCurrentYear } = require('./utils');

let user = '';

function setUser() {
  user = argv._[0];
}

setUser();

function getUserInfo(user) {
  return http.get(API.USER + '/' + user);
}

function getPRs(user, date) {
  return http.get(`${API.ISSUES}?q=author:${user}+is:pr+created:${date}-10-01T00:00:00Z..${date}-11-01T00:00:00Z`)
}

getUserInfo(user)
  .then(response => {
    console.log('USER DETAILS')
    console.log(`Name: ${response.data.name || 'N/A'}`);
    console.log(`Github ID: ${response.data.login}`);
    console.log(`Github URL: ${response.data.html_url}`);
    console.log('');

    return getPRs(user, getCurrentYear())
      .then(response => {
        console.log('PRs created');
        console.log(`${response.data.total_count}/${PR.TARGET}`);
      });
  })
