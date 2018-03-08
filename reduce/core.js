const adder = (accumulator, currentValue) => accumulator + currentValue;
function sum(array) {
  return array.reduce(adder);
  // good naming for your callback function
}

const multiply = (a, b) => a * b;
const flatten = (a, b) => a.concat(b);
function productAll(matrix) {
  return matrix.reduce(flatten).reduce(multiply);
  // good naming for your callback functions
}

const getString = (a, b) => a + b + ", ";
function luckyNumbers(array) {
  return (
    array
      .reduce(getString, "Your lucky numbers are: ")
      .trim()
      .slice(0, -1) + "."
  );
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
