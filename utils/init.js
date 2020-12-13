const modulesPractice = require('../../modulesPractice');

const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJSON = require('./../package.json');

module.exports = (minimal, clear) => {
  unhandled();

  !minimal &&
    welcome({
      title: `Saif Shines`,
      tagLine: `Howdy, nice to meet ya!`,
      description: pkgJSON.description,
      version: pkgJSON.version,
      bgColor: `#FADC00`,
      color: `#000000`,
      bold: true,
      clear
    });

  minimal && console.log(`Saif Shines`);

  checkNode('10');
};
