#!/usr/bin/env node

const init = require('./utils/init');
const handleError = require('cli-handle-error');

const alert = require('cli-alerts');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');

const input = cli.input;
const flags = cli.flags;

(async function() {
  init();
  input.includes('help') && cli.showHelp(0);

  console.log(data.bio);
  if (flags.social) {
    console.log(data.social);
  }
  if (flags.ad) {
    alert({ type: 'info', msg: data.ad });
  }
  // Debug info if needed.
  debug(flags.debug, cli);
})();
