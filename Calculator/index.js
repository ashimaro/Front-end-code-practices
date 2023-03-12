// This function adds two numbers entered by the user and displays the result
function add() {
    var num1 = Number(document.getElementById("input1").value); // Get the first number from the "input1" input field and convert it to a number
    var num2 = Number(document.getElementById("input2").value); // Get the second number from the "input2" input field and convert it to a number

    var result = num1 + num2; // Add the two numbers and store the result in a variable called "result"

    document.getElementById("result").innerHTML ="Result : "+result; // Display the result in the HTML element with the ID "result"
}

// This function subtracts two numbers entered by the user and displays the result
function substract() {
    var num1 = Number(document.getElementById("input1").value); // Get the first number from the "input1" input field and convert it to a number
    var num2 = Number(document.getElementById("input2").value); // Get the second number from the "input2" input field and convert it to a number

    var result = num1 - num2; // Subtract the second number from the first number and store the result in a variable called "result"

    document.getElementById("result").innerHTML = "Result : "+result; // Display the result in the HTML element with the ID "result"
}

// This function multiplies two numbers entered by the user and displays the result
function multiple() {
    var num1 = Number(document.getElementById("input1").value); // Get the first number from the "input1" input field and convert it to a number
    var num2 = Number(document.getElementById("input2").value); // Get the second number from the "input2" input field and convert it to a number

    var result = num1 * num2; // Multiply the two numbers and store the result in a variable called "result"

    document.getElementById("result").innerHTML = "Result : "+result; // Display the result in the HTML element with the ID "result"
}

// This function divides two numbers entered by the user and displays the result
function divide() {
    var num1 = Number(document.getElementById("input1").value); // Get the first number from the "input1" input field and convert it to a number
    var num2 = Number(document.getElementById("input2").value); // Get the second number from the "input2" input field and convert it to a number

    var result = num1 / num2; // Divide the first number by the second number and store the result in a variable called "result"

    document.getElementById("result").innerHTML = "Result : "+result; // Display the result in the HTML element with the ID "result"
}
