const axios = require('axios');
const {argv} = require('yargs');

let user = '';

function setUser() {
    user = argv._[0];
}

setUser();
