// 1
function celsiusToFahrenheit(celcius) {
    var farenheit = (9 * celcius / 5) + 32;
    return farenheit;
}

document.getElementById("convert").onclick = function () {
    var temperatureC = parseFloat(document.getElementById("temp_celsius").value);

    if (temperatureC == "") {
        alert("Temperature is invalid");
    } else {
        document.getElementById("temp_fahr").innerHTML = celsiusToFahrenheit(temperatureC);
    }

}


// 2

document.getElementById("anos_copa").innerHTML = "";

var currentYear = 2022;

while (currentYear <= 2050) {
    document.getElementById("anos_copa").innerHTML += "<li>" + currentYear + "</li>";
    currentYear += 4;
}


// 3
document.getElementById("calculate").onclick = function () {
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var absences = parseFloat(document.getElementById("absences").value);
    var totalClasses = 20;

    if (grade1 == "" || grade2 == "" || absences == "") {
        alert("Please fill all fields");
    } else {
        var average = (grade1 + grade2) / 2;
        var presence = (totalClasses - absences) / totalClasses;

        var result;
        if (average < 6.5 && presence < 0.7) {
            result = "Student failed due to an average grade lower than 6.5 and a presence rate lower than 70%";
        } else if (average < 6.5) {
            result = "Student failed due to an average grade lower than 6.5";
        } else if (presence < 0.7) {
            result = "Student failed due to a presence rate lower than 70%";
        } else {
            result = "Student passed!";
        }

        document.getElementById("result").innerHTML = result;
    }
}


// 4

var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null

    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'

    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null

    }

];
DocumentFragment.getElementById("course_sales").innerHTML = "";
var totalSales = 0;
for (var a = 0; a < sales.length; a++) {
    var sale = sales[a];
    if (!sale.refundRequested) {
        var line = "<tr>";
        line += "<td>" + sale.student + "</td>";
        line += "<td>" + sale.date + "</td>";
        line += "<td>" + sale.amount.toString() + "</td>";
        line += "</tr>";
        document.getElementById("course_sales").innerHTML += line;

        totalSales += sale.amount;
    }
}

document.getElementById("total_sales").innerHTML = totalSales;