const nonBeep = () => {
  process.stdout.write('~ * ~ * ~ | ');
}

const beepTimer = (delay) => {
  delay = Number(delay);
  if (!isNaN(delay) && delay > 0) {
    setTimeout(nonBeep, delay * 1000);
  }
}

const numbers = process.argv.slice(2);
  numbers.forEach((num) => {
    beepTimer(num);
  })

