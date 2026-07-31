/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false

    let texto = String(x)

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== texto[texto.length  - 1 - i]) {
            return false;
        }
        
    }
    return true;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
