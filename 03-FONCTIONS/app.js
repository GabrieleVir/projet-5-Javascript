// Fonctions :

	//soustraction : 
	var substr = function(a, b) {
		var resultatSoustraction = (a - b);
		return a + ' moins ' + b + ' est égal à ' + resultatSoustraction;
	}

	//division : 
	var div = function (dividende, diviseur) {
		var resultatDivision = (dividende / diviseur);
		return dividende + ' divisé par ' + diviseur + ' est égal à ' + resultatDivision;
	}

	//multiplication :
	var multiplication = function (multiplicateur, multiplicande) {
		var resultatMultiplication = (a * multiplicande);
		return multiplicateur + ' fois ' + multiplicande + ' est égal à ' + resultatMultiplication;
	}

	//pourcentage : 
	var pourcentage = function (pourcentage, nombre) {
		var resultatPourcentage = (pourcentage * nombre /100);
		return pourcentage + '% de ' + nombre + ' est égal à ' + resultatPourcentage;
	}

	//vitesse (physique) : 
	var calculVitesse = function (distance, tempsHeure) {
		var vitesse = (distance / tempsHeure);
		return vitesse + 'km/h';
	}
