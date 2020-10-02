const { argv } = require('yargs');

const { PR } = require('./constants');
const github = require('./services/github');
const { getCurrentYear } = require('./utils/date');

let user = '';

function setUser() {
  user = argv._[0];
}

setUser();

github.getUserInfo(user).then((response) => {
  console.log('USER DETAILS');
  console.log(`Name: ${response.data.name || 'N/A'}`);
  console.log(`Github ID: ${response.data.login}`);
  console.log(`Github URL: ${response.data.html_url}`);
  console.log('');

  return github.getPRs(user, getCurrentYear()).then((response) => {
    console.log('PRs created');
    console.log(`${response.data.total_count}/${PR.TARGET}`);
  });
});
