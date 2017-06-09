// Théorie objet
//vieille manière de créer un objet var Dan = new Object(); //vieux

var Dan = [
	17,'Femme',['Kim','Lopez','simple red']
]
var couleur = 'roux';
var Dannette = {
	age : 17,
	sexe : 'Femme',
	musiques : ['Kim','Lopez','simple red'],
	cheveux : couleur,
	tailleObjet : 7,
	parle : function() {
		console.log('J\'ai ' + this.age + ' ans');
	},
}; 
var jayce = Object.create(Dannette);
/*
jayce.age = 10;
jayce.sexe = 'Homme';

console.log(Dannette);
console.log(jayce);
jayce.parle();
*/
//Les objets de js ressemblent aux tableaux de php. Où les clés sont les caractéristiques et les valeurs
// du tableau sont les valeurs.


//C'est pratique car cela nous permet de spécifier les clés de chaque éléments. De plus, on peut créer des variables
//dans les objets.

//Pour faire le tour d'un objet

for(let key in jayce){
	console.log(key);
	console.log(jayce[key]);
}