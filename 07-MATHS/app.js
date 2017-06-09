//Minimum et maximum: 1

let tabNb = [7, 5, -12, 6, 32, 18, 14, -2];
/*
for(var i = 0; i < tabNb.length - 1; i++) {
	for(var u = 0; u < tabNb.length - 1; u++) {
		if(tabNb[u] < tabNb[i+1]) {
			var minNb = tabNb[u];
		}
	}
}
*/
var minNb = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

console.log(minNb);

//Minimum et maximum: 2

let tabNb2 = [-3, 9, 21, 36, 27, 54, 17, 35];
/*
for(var i = 0; i < tabNb2.length - 1; i++) {
	for(var u = 0; u < tabNb2.length - 1; u++) {
		if(tabNb[u] > tabNb2[i+1]) {
			var maxNb = tabNb2[u];
		}
	}
}
*/

var maxNb = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(maxNb);

//Minimum et maximum: 3
console.log(minNb + maxNb);

//Exercice : Bateau
var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var voleBateau = Math.ceil(floatBateau);

console.log(floatBateau, couleBateau, voleBateau);

//Exercice : Aléatoire
var randBetweenFiftyHundred = Math.round(Math.random() * 50 + 50);
console.log(randBetweenFiftyHundred);

var randZeroOne = Math.random();
console.log(randZeroOne);

var randZeroTen = Math.round(Math.random()*10);
console.log(randZeroTen);

var randZeroAndTen = Math.random() * 10;
var randFloatZeroTen = 10 - randZeroAndTen;

console.log(randFloatZeroTen);