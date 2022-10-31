function btnResult() {
    var sum = 0;
    var count = 0;
    while (sum < 10000) {
        count++;
        sum += count;
    }
    document.getElementById("infoResult").innerHTML = count;
}

function power(a, b) {
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}

function btnResult2() {
    var numberX = document.getElementById("numberX").value * 1;
    var numberN = document.getElementById("numberN").value * 1;
    var sum = 0;

    for (var i = 1; i <= numberN; i++) {
        sum += power(numberX, i);
    }

    document.getElementById("infoResult2").innerHTML = sum;
}

function btnResult3() {
    var numberN = document.getElementById("numberN1").value * 1;
    var factorial = 1;
    for (var i = 1; i <= numberN; i++) {
        factorial *= i;
    }
    document.getElementById("infoResult3").innerHTML = factorial;
}

function btnResult4() {
    var result = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            result += "<div style=\"color: white; background-color: blue;\">Div chẵn " + i + "</div>"
        } else {
            result += "<div style=\"color: white; background-color: red;\">Div lẻ " + i + "</div>"

        }
    }

    document.getElementById("infoResult4").innerHTML = result;
}

function primeNumber(n) {
    if (n < 2) {
        return 1;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return 1;
        }
    }
    return 0;
}

function btnResult5() {
    var numberN2 = document.getElementById("numberN2").value * 1;
    var prime = "";

    if (numberN2 < 2) {
        alert("Nhập số lớn hơn 2!");
    } else {
        prime += "2 ";
    }

    for (var i = 3; i <= numberN2; i++) {
        if (primeNumber(i) == 0) {
            prime += i;
            prime += " ";
        }
    }
    console.log(prime);
}