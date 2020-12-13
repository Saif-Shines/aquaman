const alert = require('cli-alerts');

module.exports = (isDebug, cli) => {
  if (!isDebug) {
    return;
  }

  alert({ type: 'warning', msg: `DEBUGGING INFO 👇🏼` });
  console.log(`cli.inputs`, cli.input);
  console.log(`cli.inputs`, cli.input);
  console.log(`cli.flags`, cli.flags);
  console.log();
};
