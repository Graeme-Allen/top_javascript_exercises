const reverseString = function(x) {
    newString = '';
    for (let i = 1; i <= x.length; i++) {
        newString = newString + x.charAt(x.length-i);
    }
    return(newString)
}

module.exports = reverseString
