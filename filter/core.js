function onlyEven(array) {
  return array.filter(num => num % 2 === 0)
}

function onlyOneWord(array) {
  return array.filter(str => str.split(' ').length === 1)
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(num => num > 0))
}

function truthyValuesOnly(array) {
  return array.filter(element => element)
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
