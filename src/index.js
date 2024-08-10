module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = Object.fromEntries(bracketsConfig);

  for (let char of str) {
    if (stack.length && bracketsMap[stack[stack.length - 1]] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
