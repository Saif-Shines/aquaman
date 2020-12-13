const chalk = require('chalk');
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`1da1f2`).bold.inverse;
const githubClr = chalk.hex(`6cc644`).bold.inverse;
const purple = chalk.hex(`6937ff`).bold.inverse;

const social = `
${twitterClr(` Twitter `)}: ${dim(`https://twitter.com/Saif_Shines`)}
  ${githubClr(` Github `)}: ${dim(`https://github.com/Saif-Shines`)}
  ${purple(` Blog `)}: ${dim(
  `https://www.linkedin.com/today/author/saif-shines`
)}
`;

const bio = `
  ${italic(
    `Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.`
  )}
  `;

const ad = `Check out more information about CLI on freshworks.dev`;

module.exports = {
  bio,
  ad,
  social
};
