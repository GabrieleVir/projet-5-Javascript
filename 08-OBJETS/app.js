//Exercice : PNJ (Personnage non-joueur)

let Character = {
	name : 'Marki le vendeur de guerre',
	age : 124,
	items_to_give : ['Marteau de guerre nain','Hache céleste à deux main','Baton secret camouflé'],
	giveItem : function() {
		let randObjet = Math.floor(Math.random() * this.items_to_give.length);
		let item_given = items_to_give[randObjet];
		console.log(item_given);
	}
}

for(characteristics in Character){
	console.log(characteristics);
}
console.log('*************************************************');

//Exercice : Shop

let objetVendre = {
	title : 'nom_objet',
	physic : 0,
	magic : 0,
	minLevel : 0,
	available : true
}

let epee = Object.create(objetVendre);
let hache = Object.create(objetVendre);
let sceptre = Object.create(objetVendre);
let arc = Object.create(objetVendre);
let dague = Object.create(objetVendre);
//char epee
epee.title = 'Epée de Uther';
epee.physic = 2998;
epee.magic = 100;
epee.minLevel = 292;
epee.available = false;

//char hache
hache.title = 'Hache de Zeus';
hache.physic = 2800;
hache.magic = 20;
hache.minLevel = 240;
hache.available = true;

//char sceptre
sceptre.title = 'Sceptre de aquaman';
sceptre.physic = -200;
sceptre.magic = -400;
sceptre.minLevel = 1;
sceptre.available = true;

//char arc
arc.title = 'Arc basique';
arc.physic = 15;
arc.magic = 15;
arc.minLevel = 3;
arc.available = true;

//char dague
dague.title = 'Dague drakéide';
dague.physic = 87000;
dague.magic = 87770;
dague.minLevel = 9000;
dague.available = true;
dague.dmg = dague.physic;

let tabObjet = [epee, hache, sceptre, arc];
let appelObjets = function (array) {
	for(let i = 0; i < array.length; i++){
		console.log(array[i].title);
	}
}
appelObjets(tabObjet);
let appelObjetsDispo = function (array) {
	for(let i = 0; i < array.length; i++){
		if(array[i].available) {
			console.log(array[i].title);
		}
	}
}
appelObjetsDispo(tabObjet);

let appelObjetsLvlMin = function (array) {
	for(let i = 0; i < array.length; i++){
		if(array[i].minLevel >= 10) {
			console.log(array[i].title);
		}
	}
}
appelObjetsLvlMin(tabObjet);
console.log('*************************************************');

//Exercice personnage
let hero = {
	name : 'Le magnifique Axel Bag',
	level : 9001,
	life : 9121,
	weapon : dague,
	attack : function(){
		let attackName = 'Coup de dague du dragon'
		let attackDmg = Math.round(Math.random() * (this.weapon.physic) + this.level );
		console.log(hero.name + ' a lancé ' + attackName + ' avec ' + this.weapon.title + ' et a infligé ' + attackDmg + ' dégats!');
	}
}

hero.attack();
console.log('*************************************************');
//Exercice adversaire

let fang = {
	name : 'fangs',
	damage : 12
}

let character = {
	name : '',
	level : 0,
	life : 0,
	weapon : fang,
	attack : function (){},
	receiveDamage : function () {}
}	

let opponentCharacter = Object.create(character);
let mainCharacter = Object.create(hero);

//Ennemi
opponentCharacter.name = 'Araignée démoniaque';
opponentCharacter.level = 2;
opponentCharacter.life = 10;
opponentCharacter.attack = function(){
	let attackName = 'Morsure'
	let attackDmg = Math.round(Math.random() * (this.weapon.physic) + this.level );
	console.log(hero.name + ' a lancé ' + attackName + ' avec ' + this.weapon.title + ' et a infligé ' + attackDmg + ' dégats!');
}
opponentCharacter.receiveDamage = function(){
	console.log(mainCharacter.name + ' attaque ' + this.name + ' avec l\'arme ' + mainCharacter.weapon.title);
	let attackDmg = Math.round(Math.random() * (mainCharacter.weapon.physic) + mainCharacter.level );
	console.log('et lui inflige ' + attackDmg);
	console.log(this.name + ' a maintenant ' + (this.life - attackDmg));	
	console.log(opponentCharacter.name + ' est morte dans des horribles souffrances...');

}
opponentCharacter.receiveDamage();

//Faudra le nettoyer plus tard

mainCharacter.attack(opponentCharacter); // Pour savoir qui il tappe, rajoutons un argument à la fonction
