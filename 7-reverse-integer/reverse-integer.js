/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let number = 0
    let num = 0
    
    const text = String(x)

    num = text.split('').reverse().join('')
    number = Number.parseInt(num)

    

    if(x < 0){
        number = number*(-1)
    }

    if(number < -(2**31) || number > (2**31) -1){
        return 0
    }

    return number   
};