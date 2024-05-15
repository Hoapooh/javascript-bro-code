// Switch = can be efficient replacement to many else if statements

let testScore = 92;
let letterGrade;

switch (true) {
	case testScore > 100:
		console.log("Score can not be greater than 100");
		break;
	case testScore >= 90:
		letterGrade = "A";
		break;
	case testScore >= 80:
		letterGrade = "B";
		break;
	case testScore >= 70:
		letterGrade = "c";
		break;
	case testScore >= 60:
		letterGrade = "D";
		break;
	default:
		letterGrade = "F";
}
console.log(letterGrade);
