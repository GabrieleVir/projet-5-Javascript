//Exercice 1: Langues
var langue = 'fr';
var stockageMess = '';

if (langue == 'ita') {
	stockageMess = 'Ciao a tutti!';
} else if (langue == 'fr') {
	stockageMess = 'Bonjour tout le monde !';
} else {
	stockageMess = 'Hello world!';
}

//Exercice 2: Affichage des scores

var score = 100,
resultat = 71;

var rang = '';

if(resultat >= 90) {
	rang = 'A';
}else if (resultat < 90 && resultat > 50) {
	rang = 'B';
} else {
	rang = 'C';
}

//Exercice 3: Mettre au pluriel
 var apple = 'pomme',
 numberApple = 4;

if (numberApple > 1) {
	var apple = apple + 's';
} 

console.log('Je possède ' + numberApple + ' ' + apple);
