const ora = require('ora');
const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;
const { yellow, green } = require('chalk');

const spinner = ora({ text: '' });
const apiURL = `https://api.github.com/users/Saif-Shines`;

module.exports = async () => {
  spinner.start(`${yellow(`FOLLOWERS`)} fetching`);
  const [error, res] = await to(axios.get(apiURL));
  handleError(`API CALL FAILED`, error, false, false);
  const ghFollowers = res.data.followers;
  spinner.succeed(`${green(`FOLLOWERS`)} fetched`);
  console.log(`Github Followers: ${ghFollowers}`);
};
