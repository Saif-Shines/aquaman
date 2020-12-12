#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true
});

console.log(`Hello Saif! - Developer Advocate

Half-human, half-Atlantean Arthur is born with the ability to
communicate with marine creatures. He goes on a quest to retrieve
the legendary Trident of Atlan and protect the water world.

📧 aquaman@ocean.master
☏ 7854-996-1245
`);
