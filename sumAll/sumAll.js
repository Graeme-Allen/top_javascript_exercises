const sumAll = function(x,y) {
    if (x < 0 || y < 0){
        return 'ERROR'
    } else if (!Number.isInteger(x+y)) {
        return 'ERROR'
    } else {
        if (x > y) {
            const big = x;
            const small = y;
            let sum = 0
            for (let i = small ;i <= big; i++) {
                sum = sum + i }     
            return sum  
        } else {
            const big = y;
            const small = x;
            let sum = 0
            for (let i = small ;i <= big; i++) {
                sum = sum + i }
            return sum
       }
    }
    return sum
}


module.exports = sumAll
