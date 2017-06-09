//Pour retirer le premier élément: tab.shift()
//Pour ajouter un élément qui va être mis à la première place: tab.unshift('nomElmt')

//Exercice 1: addition.

let tableauAddition = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var addition = 0;
for(var i = 0; i < tableauAddition.length; i++ ) {
	addition = addition + tableauAddition[i]; 

}
console.log( addition );

//Exercice 2: Vos meilleurs choix

let actorsArray = ['John', 'Cena', 'Mikkelsen'];
let orderArray = ['first', 'second', 'third'];

for(var i = 0; i < actorsArray.length; i++) {
	console.log( 'The '+ orderArray[i] + ' is ' + actorsArray[i] );
}

//Exercice 2: Duplications

var valueArray = ['ruby', 'marteau', 'piece', 'dague', 'piece', 'tenue', 'piece', 'ruby', 'vie', 'dague', 'piece'];
let elementDouble = '';

var motsDouble = function(array) {
	for(var i = 0; i < array.length; i++) {
		for(var u = i+1; u < array.length; u++) {
			if (elementDouble === array[u]) {
				array.splice(u,1);
			}else if(array[i] === array[u]) {
				console.log( array[i] );
				array.splice(u,1);
				elementDouble = array[i];
			}
		}
	}
}

motsDouble(valueArray);

//Exercice 3: clone

let marioArray = ['Mario', 'Luigi', 'Peach'];
let bowserArray = [];
for (var i = 0; i < marioArray.length; i++) {
	bowserArray.push(marioArray[i]);
}

bowserArray.push('Bowser');
console.log( marioArray );
console.log( bowserArray );


//Exercice 3: Autre méthode
let marioArray2 = ['Mario', 'Luigi', 'Peach'];
let bowserArray2 = marioArray2.slice();
bowserArray2.push('Bowser');
console.log(bowserArray2);

//Exercice 4: alétoire

let nomsArray = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
var nomAléa = Math.floor((Math.random() * nomsArray.length));
console.log( nomsArray[nomAléa] );