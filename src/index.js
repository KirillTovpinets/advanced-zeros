module.exports = function getZerosCount(number, base) {
	if (base > 10) {
		devider = Math.round(base / 2);
	}else{
		devider = 5;
	}
  var floor = Math.floor(number / devider);
	var numZeroes = 0;
	while(floor !== 0){
		numZeroes += floor;
		floor = Math.floor(floor / devider);
	}
  return numZeroes;
}