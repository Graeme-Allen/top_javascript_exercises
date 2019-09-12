const repeatString = function(x,y) {
    if (y < 0) {
        message = 'ERROR';
    } else if (y == 0) {
        message = '';
    } else {
        message = x;
        for (let i = 1; i < y; i++){
            message = message + x;
        }
    }
    return message;
}
module.exports = repeatString
