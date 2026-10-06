# 20. Valid Parentheses

### Difficulty: Easy

## Description
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:


	Open brackets must be closed by the same type of brackets.
	Open brackets must be closed in the correct order.
	Every close bracket has a corresponding open bracket of the same type.


 
Example 1:


Input: s = "()"

Output: true


Example 2:


Input: s = "()[]{}"

Output: true


Example 3:


Input: s = "(]"

Output: false


Example 4:


Input: s = "([])"

Output: true


Example 5:


Input: s = "([)]"

Output: false


 
Constraints:


	1 <= s.length <= 104
	s consists of parentheses only '()[]{}'.

## Submission Details
- **Status**: Accepted
- **Runtime**: 3
- **Memory**: 54480000
- **Language**: javascript

## Code
```javascript
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
```
