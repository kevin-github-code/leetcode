/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let openBracket = ["(", "{", "["];
  let closeBracket = [")", "}", "]"];
  let stack = [];

  for (let k = 0; k < s.length; k++) {
    for (let i = 0; i < openBracket.length; i++) {
      if (s[k] == openBracket[i]) {
        stack.push(s[k]);
      }

      if (s[k] == closeBracket[i]) {
        if (stack.pop() != openBracket[i]) {
          return false;
        }
      }
    }
  }

  return stack.length == 0;
};