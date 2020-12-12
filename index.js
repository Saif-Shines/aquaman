#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const alert = require('cli-alerts-saif');
const log = console.log;
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`1da1f2`).bold.inverse;
const githubClr = chalk.hex(`6cc644`).bold.inverse;
const purple = chalk.hex(`6937ff`).bold.inverse;

// Alerts
const sym = require('log-symbols');
const success = chalk.green;
const warning = chalk.keyword(`orange`);
const error = chalk.red.bold;
const info = chalk.blue;

unhandled();

welcome({
  title: `Saif Shines`,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: false
});

log(`
${italic(
  `Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.`
)}

${twitterClr(` Twitter `)}: ${dim(`https://twitter.com/Saif_Shines`)}
${githubClr(` Github `)}: ${dim(`https://github.com/Saif-Shines`)}
${purple(` Blog `)}: ${dim(`https://www.linkedin.com/today/author/saif-shines`)}

`);

log(`
${sym.success} ${success(` SUCCESS `)}: Thank of checking out my CLI
${sym.info} ${info(` INFO `)}: I'm leaning how to improve fdk
${sym.warning} ${warning(` WARNING `)}: Please don't copy
${sym.error} ${error(` ERROR `)}: I'm on vacation. Contact me next week.
`);

checkNode('10');

Promise.reject(new Error('THIS_IS_UNHANDLED'));

//alert({ type: 'success', msg: 'randome message', name: 'wow' });
