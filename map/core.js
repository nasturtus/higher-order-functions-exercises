function multiplyBy10(array) {
  return array.map(element => element * 10)
}

function onlyVowels(array) {
  return array.map(word => {
    return vowellise(word)
  })
}

function vowellise(word) {
  var vowelledArray = word.split('').filter(chr => chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u') 
  var vowelledString = vowelledArray.join('')
  return vowelledString
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
