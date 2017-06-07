//Exercices 1: Pair et impair.

for (var i = 0; i <= 20; i++) {
	var moduloI = i%2;
	if (moduloI === 0) {
		console.log(i + ' est pair.');
	} else {
		console.log(i + ' est impair.');
	}
}

//Exercice 2: Multiplication Tables

for(var i = 0; i <= 10; i++) {
	console.log (i + '*' + 9 + '= ' + (i * 9));
}

//Exerice 3: assigner des grades

var note = function(a) {
	return a;
}
var msgGrade = "Vous avez le grade ";
var grade = '';
for(var i = 0; i <= 100; i++) {
	
	if(note(i) > 90) {
		grade = 'A';
		console.log(msgGrade + grade);
	}else if(note(i) > 80) {
		grade = 'B';
		console.log(msgGrade + grade);
	}else if(note(i) > 70) {
		grade = 'C';
		console.log(msgGrade + grade);
	}else if(note(i) > 65) {
		grade = 'D';
		console.log(msgGrade + grade);
	}else {
		grade = 'F';
		console.log(msgGrade + grade);
	}
				
}


//Exercice 4: pyramide
for(var i = 0; i < 4; i++) {
	var points = Array(i+2).join('.'); // We have to start with i+2 because array.join put the value of join between array elements.
	console.log(points);
}

//Exercice 4: solution diffèrente
var pointsPyramide = '';
for(var i = 0; i < 4; i++) {
	pointsPyramide = pointsPyramide + '.';
	console.log(pointsPyramide);
}

