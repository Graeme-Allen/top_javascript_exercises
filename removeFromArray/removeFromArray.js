const removeFromArray = function(x,...args) {
    while (args.length > 0) {
        if (x.includes(args[0])) {
        x.splice(x.indexOf(args.shift()),1)
        } else args.shift()
    }
    return x;
}
module.exports = removeFromArray
