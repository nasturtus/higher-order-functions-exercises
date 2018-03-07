const reducer = (accumulator, currentValue) => accumulator + currentValue;
function sum(array) {
  return array.reduce(reducer);
}

function productAll(array) {
  return array
    .reduce((a, b) => {
      return a.concat(b);
    }, [])
    .reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    });
}

function luckyNumbers(array) {
  // Your lucky numbers are: 30, 48, 11, 5, 32.
  var str = "Your lucky numbers are: ";
  return array
    .reduce((a, b) => {
      return a + b + ", ";
    }, str)
    .trim().slice(0, -1) + '.';
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
