var Inputs = {
	numbers: [],
	operator: "",
	tempValue: "",
	moveToNumbers: function() {
		if(!(Inputs.tempValue === "")) {
			Inputs.numbers.push(parseInt(Inputs.tempValue));
			Inputs.tempValue = "";
		}
	},
	checkOperator: function() {
		switch(Inputs.operator) {
			case "+":
				Calculator.addNumbers();
				break;
			case "-":
				Calculator.subtractNumbers();
				break;
			case "*":
				Calculator.multiplyNumbers();
				break;
			case "/":
				Calculator.divideNumbers();
				break;
			default:
				alert("Please select an appropriate operator.");
				break;
		}
	},
	spliceNumbers: function () {
		//Clears numbers[] and adds result.
		Inputs.numbers.splice(0,2,result);
	}
}

var Calculator = {
	canUseOperator: false,
	addNumbers: function() {
		result = Inputs.numbers[0] + Inputs.numbers[1];
	},
	subtractNumbers: function() {
		result = Inputs.numbers[0] - Inputs.numbers[1];
	},
	multiplyNumbers: function() {
		result = Inputs.numbers[0] * Inputs.numbers[1];
	},
	divideNumbers: function() {
		result = Inputs.numbers[0] / Inputs.numbers[1];
	},
	deleteNumbers: function() {
		$("#screen").slice(0, -1);
	},
	clearScreen: function() {
		$("#screen").empty();
		Inputs.spliceNumbers();
	},
	showResult: function() {
		$("#screen").append(Inputs.numbers[0]);
	},
}

$(":button").click(function() {
	if($(this).hasClass("number")) {
		Inputs.tempValue += $(this).val();
		Calculator.canUseOperator = true;
		$("#screen").append($(this).val())
	}
	if ($(this).hasClass("operator")) {
		// Check to see if a number has been entered before operator
		if(Calculator.canUseOperator) {
			Inputs.moveToNumbers();
			Inputs.operator = $(this).val();
			$("#screen").append($(this).val());
		} else {
			alert("Please enter a number first");
		}
	}
	if($(this).hasClass("equals")) {
		Inputs.moveToNumbers();
		Inputs.checkOperator();
		Inputs.spliceNumbers();
		Calculator.clearScreen();
		Calculator.showResult();
	}
	if($(this).hasClass("clear")) {
		Inputs.numbers.length = 0;
		Inputs.tempValue = "";
		Calculator.canUseOperator = false;
		$("#screen").empty();
	}
	if($(this).hasClass("delete")) {
		// Figure this out!
		Inputs.deleteNumbers();
	}
})