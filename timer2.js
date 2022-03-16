const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('keypress', (str, cmd) => {
  if (cmd.name === 'b') process.stdout.write('\x07');

  else if (Number(cmd.name) > 0 && Number(cmd.name) < 10 ) {
    process.stdout.write(`\rsetting timer for ${cmd.name} seconds`);

    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(cmd.name) * 1000);

  } else if (cmd.ctrl && cmd.name === 'c') {
    process.stdout.write('\rThanks for using me, ciao!\n');
    process.exit(0);
  } else {
    process.stdout.write('\rInvalid input.                         ');
  };
})
