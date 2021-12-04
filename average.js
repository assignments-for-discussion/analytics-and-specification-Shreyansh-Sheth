
function average(numbers) {
  const newNumbers = numbers.filter(v => !Number.isNaN(v))
  return newNumbers.reduce((p, c)=> p + c, 0) /newNumbers.length;
}

module.exports = {average};
