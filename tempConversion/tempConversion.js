const ftoc = function(f) {
var celcius = (f - 32) * (5/9);
var celciusRound = Math.round(celcius * 10) / 10;
return celciusRound;
}

const ctof = function(c) {
var fahr = (c*9/5) + 32;
var fahrRound = Math.round(fahr * 10) / 10;
return fahrRound;
}

module.exports = {
  ftoc,
  ctof
}
