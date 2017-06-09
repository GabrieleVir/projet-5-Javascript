let msgAff = '';
let countEss = 0;
let minNb = 20;
let maxNb = 80;

let randBetweenMinMax = function(){
	let roundRandNbFunction = Math.round(Math.random() * (maxNb - minNb) + minNb);	
	return roundRandNbFunction;
}

var roundRandNb = randBetweenMinMax();
console.log(roundRandNb);

let essaiTrouveNb = function(essai) {

	if(essai > roundRandNb) {
		let essaiUtilisateur = window.prompt('C\'est plus petit');
		countEss++;
		essaiTrouveNb(essaiUtilisateur);
	} else if (essai < roundRandNb) {
		let essaiUtilisateur = window.prompt('C\'est plus grand');
		countEss++;
		essaiTrouveNb(essaiUtilisateur);
	}else {
		window.alert('Tu as trouve en' + countEss + 'coups.\n Bravo!');
	}

}

var essaiUtilisateur = window.prompt('Tentez de trouver le nombre!');

essaiTrouveNb(essaiUtilisateur);