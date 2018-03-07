function multiplyBy10(array) {
  return array.map(element => element * 10)
}

const vowellised = word => {return word.split('').filter(chr => 'aeiou'.includes(chr)).join('')}
function onlyVowels(array) {
  return array.map(vowellised)
}

function doubleMatrix(array) {
  return array.map(arr => arr.map(elem => elem * 2))
}

function onlyNames(array) {
  return array.map(obj => obj.name)
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
