// Exercice 1
console.log("This is ex1.js");


// Exercice 2
var firstName = "Vincen";
var birthYear = 2006;
var currentYear = 2023;
var age = currentYear - birthYear;

var message =  "Hi, my name is " + firstName + " , I'm " + age.toString() + " years old and I'm learning JavaScript";
document.getElementById("student_message").innerHTML = message


// Exercice 3
var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);
var average = (num1 + num2) / 2;
average = average.toFixed(2);
document.getElementById("result").innerHTML = average;


// Exercice 4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString();

console.log(phone1.length == 9);
console.log(phone2.length == 9);
console.log(phone3.length == 9);



// Exercice 5
var ops = Math.pow(32, 6);

console.log(ops);


// Exercice 7
var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    console.log(quantity += quantity); 
    console.log( (7+5) / number + 2 ); 
    console.log(pressure); 
    console.log(temperature); 
    console.log(typeof pressure); 
console.log(typeof temperature);

// Exercice 8
var url1 = "httpls://" + document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = url1;

var url2 = document.getElementById("url_3").innerHTML.replace("https://", "");
document.getElementById("url_4").innerHTML = url2;