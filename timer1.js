const cmdTimer = process.argv.slice(2);

for (time of cmdTimer) {
  if (Number(time) && Number(time) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}
