function add() {
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    var result = num1 + num2;

    document.getElementById("result").innerHTML ="Result : "+result;
}

function substract() {
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    var result = num1 - num2;

    document.getElementById("result").innerHTML = "Result : "+result;
}

function multiple() {
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    var result = num1 * num2;

    document.getElementById("result").innerHTML = "Result : "+result;
}

function divide() {
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    var result = num1 / num2;

    document.getElementById("result").innerHTML = "Result : "+result;
}