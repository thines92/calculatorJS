var inputs = [];
var currentInput = "";
var operators = [];
var answer = 0;

var Calculations = {
	add(x,y) {
		return x + y;
	},

	subtract(x,y) {
		return x - y;
	}
}

function checkButtonType() {
	var $this = $(this);
	if($($($this)).hasClass("number")) {
		currentInput += $($this).val().toString();
	} else if ($($this).hasClass("operator")) {
		inputs.push(parseInt(currentInput));
		currentInput = "";
	 	operators.push($($this).val());
	} else if ($($this).hasClass("equals")) {
		inputs.push(parseInt(currentInput));
		currentInput = "";
		calculateInputs();
	}
}

function calculateInputs() {
	// for(i = 0; i < inputs.length; i++) {
	// 	switch(operators[i]) {
	// 		case "+":
	// 			answer += Calculations.add(inputs[i],inputs[i+1]);
	// 			inputs.length = 0;
	// 			operators.length = 0;
	// 			break;
	// 		case "-":
	// 			answer = Calculations.subtract(inputs[i],inputs[i+1]);
	// 			break;
	// 		case undefined:
	// 			break;
	// 		default:
	// 			alert("big ole error");
	// 			break;
	// 	}
	// }
	if(operators[0] === "+") {
		operators.shift();
		answer += Calculations.add(inputs[0],inputs[1]);
	}
	$("#screen").append(answer);
}



$(":button").click(function() {
	$("#screen").append($(this).val())
	checkButtonType.bind($(this))();
})