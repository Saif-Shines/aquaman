#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`1da1f2`).bold.inverse;
const githubClr = chalk.hex(`6cc644`).bold.inverse;
const purple = chalk.hex(`6937ff`).bold.inverse;

welcome({
  title: `Saif Shines`,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true
});

log(`
${italic(`Half-human, half-Atlantean Arthur is born with the ability to
communicate with marine creatures. He goes on a quest to retrieve
the legendary Trident of Atlan and protect the water world.`)}

${twitterClr(` Twitter `)}: ${dim(`https://twitter.com/Saif_Shines`)}
${githubClr(` Github `)}: ${dim(`https://github.com/Saif-Shines`)}
${purple(` Blog `)}: ${dim(`https://www.linkedin.com/today/author/saif-shines`)}

`);
