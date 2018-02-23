module.exports = function getZerosCount(number, base) {
	let multNumb = Math.log2(base);
	var multNumbFact = 0;
	var multiples = [];
	var numMultiples = [];

	for (var j = 2; j < base; j++) {
		if (base % j === 0) {
			var isUnique = true;
			for (var i = 0; i < multiples.length; i++) {
				if (j % multiples[i] === 0) {
					var checkMult = j;
					var numMult = 1;
					while(checkMult > 1){
						if (checkMult % multiples[i] === 0) {
							checkMult = checkMult / multiples[i];
							numMult++;
						}else{
							break;
						}
					}
					var alreadyExist = false;
					for (var k = 0; k < numMultiples.length; k++) {
						if (numMultiples[k][0] === multiples[i]) {
							numMultiples[k][1] += numMult;
							alreadyExist = true;
						}
					}
					if (!alreadyExist) {
						numMultiples.push([multiples[i], numMult]);
					}
					isUnique = false;
					break;
				}
			}

			if (isUnique) {
				multiples.push(j);
				numMultiples.push([j, 1]);
				multNumbFact++;
			}
		}
	}
	var devider = numMultiples[numMultiples.length - 1][0];
	var floor = Math.floor(number / devider);
	var numZeroes = 0;
	while(floor !== 0){
		numZeroes += floor;
		floor = Math.floor(floor / devider);
	}
	return numZeroes;
}