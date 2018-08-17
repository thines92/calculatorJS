var Inputs = {
	numbers: [],
	operator: "",
	tempValue: "",
	screenString: "",
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
		Inputs.screenString = Inputs.screenString.slice(0, -1);
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
		Inputs.screenString = Inputs.screenString + $(this).val();
		$("#screen").html(Inputs.screenString)
		if(Inputs.numbers.length === 0) {
			Calculator.canUseOperator = true;
		}
	}
	if ($(this).hasClass("operator")) {
		// Check to see if a number has been entered before operator
		if(Calculator.canUseOperator) {
			Inputs.moveToNumbers();
			Inputs.operator = $(this).val();
			Inputs.screenString = Inputs.screenString + ($(this).val())
			Calculator.canUseOperator = false;
			$("#screen").html(Inputs.screenString);
		} else if(Inputs.numbers.length === 0) {
			alert("Please enter a number first");
		} else {
			alert("Please finish your current calculation before using another operator.");
		}
	}
	if($(this).hasClass("equals")) {
		Inputs.moveToNumbers();
		Inputs.checkOperator();
		Inputs.spliceNumbers();
		Inputs.screenString = Inputs.numbers[0];
		Calculator.clearScreen();
		Calculator.showResult();
		Calculator.canUseOperator = true;
	}
	if($(this).hasClass("clear")) {
		Inputs.numbers.length = 0;
		Inputs.tempValue = "";
		Inputs.screenString = "";
		Calculator.canUseOperator = false;
		$("#screen").empty();
	}
	if($(this).hasClass("delete")) {
		// Figure this out!
		Calculator.deleteNumbers();
		$("#screen").empty();
		$("#screen").append(Inputs.screenString);
	}
})