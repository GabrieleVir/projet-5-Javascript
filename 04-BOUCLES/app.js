//Exercices 1: Pair et impair.

for (var i = 0; i < 21; i++) {
	var moduloI = i%2;
	if (moduloI === 0) {
		console.log(i + ' est pair.');
	} else {
		console.log(i + ' est impair.');
	}
}

//Exercice 2: Multiplication Tables

for(var i = 0; i < 11; i++) {
	var neuf = 9;
	console.log (i + '*' + neuf + '= ' + (i * neuf));
}

//Exerice 3: assigner des grades

var note = function(a) {
	var grade = '';
	for(var i = 0; i < 101; i++) {
		
		if(a > 90) {
			return grade = 'A';
		}else if(a > 80) {
			return grade = 'B';
		}else if(a > 70) {
			return grade = 'C';
		}else if(a > 65) {
			return grade = 'D';
		}else {
			return grade = 'F';
		}
				
	}
}

//Exercice 4: pyramide
for(var i = 0; i < 4; i++) {
	var points = Array(i+2).join('.'); // We have to start with i+2 because array.join put the value of join between array elements.
	console.log(points);
}
