module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      result = result.concat(matrix[i]);
    } else {
      result = result.concat(matrix[i].reverse());
    }
  }
  return result;
}