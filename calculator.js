function sum(a, b) {
    return a + b;
}

function showIt() {

    let firstInput = document.getElementById("num1").value;
    let secondInput = document.getElementById("num2").value;

    if (firstInput === "" || secondInput === "") {
        document.getElementById("ShowsResult").innerHTML = "Please enter both numbers";
        return;
    }

    let first = Number(firstInput);
    let second = Number(secondInput);

    let result = sum(first, second);

    document.getElementById("ShowsResult").innerHTML = "Result: " + result;
}
function sum(a, b) {
    return a + b;
}

function showIt() {
    let firstInput = document.getElementById("num1").value;
    let secondInput = document.getElementById("num2").value;

    if (firstInput === "" || secondInput === "") {
        document.getElementById("ShowsResult").innerHTML = "Please enter both numbers";
        return;
    }

    let first = Number(firstInput);
    let second = Number(secondInput);

    let result = sum(first, second);

    document.getElementById("ShowsResult").innerHTML = "Result: " + result;
}