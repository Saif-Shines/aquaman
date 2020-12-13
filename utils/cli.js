const meow = require('meow');
const { green, yellow, cyan, dim } = require('chalk');

const helpText = `
  Usage
    ${green(`npx saif`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

  Options
    ${yellow(`--bio`)}            Print the bio info ${dim(`DEFAULT: true`)}
    ${yellow(`--no-bio`)}         Don't Print the bio info
    ${yellow(`social`)}           Print the social info ${dim(`DEFAULT: true`)}
    ${yellow(`--no-social`)}      Don't Print the social info
    ${yellow(`ad`)}               Print the ad info ${dim(`DEFAULT: true`)}
    ${yellow(`--no-ad`)}          Don't Print the ad info
    ${yellow(`-d, --debug`)}      Debug info
    ${yellow(`-m, --minimal`)}    Print without Bio
    ${yellow(`--clear`)}          Clear the console ${dim(`DEFAULT: true`)}
    ${yellow(`--no-clear`)}       Don't clear the console
    ${yellow(`-p, --posts`)}      Prints last 10 posts
  Commands
    ${cyan(`help`)}             Print CLI help info


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
    },
    clear: {
      type: 'boolean',
      default: true
    },
    posts: {
      type: 'boolean',
      default: false,
      alias: 'p'
    }
  }
};

module.exports = meow(helpText, options);
