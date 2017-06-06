//Exercice 1 : Diseur de bonne aventure

var nombreEnfants = 3,
nomFemme = 'Astrid',
nomPays = 'Belgique',
nomMetier = 'informaticien';

var myPara = document.querySelector('p');
myPara.textContent = 'Vous serez ' + nomMetier + 'et habiterez à ' 
+ nomPays + ', et marié a '+ nomFemme +' avec '+ nombreEnfants + ' enfants.';

//Exercice 2 : Calculer l'âge

var anneeCourante = 2017;
const anneeNaissance = 1994;

//Exercice 3 : Bientôt vieux

var monAge = 23,
ageMax = 65,
denreeAlimentaire = 'pains aux chocolats',
consomationDenreeParJour = 2,
jourParAn = 365;


var consomationTouteMaVie = consomationDenreeParJour * jourParAn * (ageMax - monAge);

//Exercice 4: Priorités

var result = (1 + 2) * 3 + 4 / 2;

var etape1 = 1 + 2,
etape2 = etape1 * 3,
etape3 = 4/2,
etape4 = etape2 + etape3;

console.log(etape1);
console.log(etape2);
console.log(etape3);
console.log(etape4);