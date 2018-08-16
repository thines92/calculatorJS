var Inputs = {
	numbers: [],
	operator: "",
	tempValue: "",
	result: 0,
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
	moveToNumbers: function() {
		if(!(Inputs.tempValue === "")) {
			Inputs.numbers.push(parseInt(Inputs.tempValue));
			Inputs.tempValue = "";
		}
	},
	checkOperator: function() {
		switch(Inputs.operator) {
			case "+":
				Inputs.addNumbers();
				break;
			case "-":
				Inputs.subtractNumbers();
				break;
			case "*":
				Inputs.multiplyNumbers();
				break;
			case "/":
				Inputs.divideNumbers();
				break;
			default:
				alert("Please select an appropriate operator.");
				break;
		}
	},
	resetTempValue: function () {
		//Clears numbers[] and adds result.
		Inputs.numbers.splice(0,2,result);
	}
}

var Calculator = {
	canUseOperator: false,
	clearScreen: function() {
		$("#screen").empty();
		Inputs.resetTempValue();
	},
	showResult: function() {
		$("#screen").append(Inputs.numbers[0]);
	},
	// canUseOperator: function() {
	// 	if(Inputs.operator === "")
	// 		if(Inputs.tempValue !== "" || Inputs.numbers.length > 0) {
	// 			return true;
	// 	}
	// },
	
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
		Inputs.resetTempValue();
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
	}
})