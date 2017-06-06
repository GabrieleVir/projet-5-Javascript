// Fonctions :

	//soustraction : 
	var substr = function(a, b) {
		return a + ' moins ' + b + ' est égal à ' + (a - b);
	}

	//division : 
	var div = function (a, b) {
		return a + ' divisé par ' + b + ' est égal à ' + (a / b) ;
	}

	//multiplication :
	var multiplication = function (a, b) {
		return a + ' fois ' + b + ' est égal à ' + (a * b);
	}

	//pourcentage : 
	var pourcentage = function (a, b) {
		return a + '% de ' + b + ' est égal à ' + (a * b /100);
	}

	//vitesse (physique) : 
	var calculVitesse = function (a, b) {
		return a / b + 'km/h';
	}
