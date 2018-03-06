// Check to see if all elements in an array
// are even numbers.
function allEven(input) {
  return input.every(num => num % 2 === 0);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.
function positiveMatrix(input) {
  return input.every(row => row.every(num => num > 0));
}

module.exports = {
  allEven,
  positiveMatrix
};
