const meow = require('meow');
const { green, yellow, cyan } = require('chalk');

const helpText = `
  Usage
    ${green(`npx saif`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

  Options
    ${yellow(`--bio`)}            Print the bio info
    ${yellow(`--no-bio`)}         Don't Print the bio info
    ${yellow(`social`)}           Print the social info
    ${yellow(`--no-social`)}      Don't Print the social info
    ${yellow(`ad`)}               Print the ad info
    ${yellow(`--no-ad`)}          Don't Print the ad info
    ${yellow(`-d, --debug`)}      Debug information
    ${yellow(`-m, --minimal`)}      Debug information

  Commands
    ${cyan(`help`)}             Print CLI help information


  Examples
    ${green(`npx awais`)} ${yellow(`--social`)}
    ${green(`npx awais`)} ${yellow(`--no-ad`)}
`;

const options = {
  inferType: true,
  hardRejection: false,
  flags: {
    minimal: {
      type: 'boolean',
      alias: 'm'
    },
    bio: {
      type: 'boolean',
      default: true
    },
    social: {
      type: 'boolean',
      default: true
    },
    ad: {
      type: 'boolean',
      default: true
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd'
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v'
    }
  }
};

module.exports = meow(helpText, options);
