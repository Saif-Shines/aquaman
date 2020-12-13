const meow = require('meow');

const helpText = `
  Usage
    npx saif [options]

  Options
    social           Show the social info
    --no-social      Don't Show the social info
    ad               Show the ad info
    --no-ad          Don't show the ad info
    -d, --debug      Debug information

  Examples
    npx awais --no-social
`;

const options = {
  flags: {
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
    }
  }
};

module.exports = meow(helpText, options);
