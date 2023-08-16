// alert("testing the alert");

// This is a single line comment

/*
This is a multi-line comment
*/


//***********************************************
// Lesson 4 - DOM
//***********************************************

// console.log(document.getElementById("blue_box").innerHTML);

// document.getElementById("blue_box").innerHTML = "Hello World";

// console.log(document.getElementById("blue_box").innerHTML);


//***********************************************
// Lesson 5 - Variables
//***********************************************
// var user_name = "Vincen";

// document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name;


//***********************************************
// Lesson 8 - Data Types - Booleans
//***********************************************

// var orderValue = 8000;

// if (orderValue >= 1000) {
//     console.log("You can do a transaction");
// } else {
//     console.log("You cannot do a transaction");
// }



//************************************************
// Lesson 11 - Function
//************************************************

// function sumNumber() {
//     var num1 = 5;
//     var num2 = 10;
//     var sum = num1 + num2;

//     console.log(sum);
// }
// sumNumber();


// function sumArgs(num1, num2) {
//     sum = num1 + num2;
//     return sum;
// }

// var average = sumArgs(10, 20) / 2;
// console.log(average);


// document.getElementById("sum_result").innerHTML = sumArgs(10, 20);


//************************************************
// Lesson 12 - Data Arrays
//************************************************

// var students = ["Vincen", "John", "Mary", "Jane"];

// console.log(students[0]);

// var courses = ["HTML", "CSS", "JS", "PHP"];


//************************************************
// Lesson 13 - Object Methods
//************************************************

// var student = {
//     'firstname': 'Vincen',
//     'lastname': 'Sanjaya',
//     'fullName': function () {
//         return this.firstname + " " + this.lastname;
//     }
// };


//************************************************
// Lesson 16- Events
//************************************************

// document.getElementById("click-me").onclick = function () {
//     alert("You clicked me!");
// }
// document.getElementById("hover-me").onmouseover = function () {
//     alert("You hovered me!");
// }
// document.getElementById("leave-me").onclick = function () {
//     alert("You clicked me!");
// }

// function show_alert() {
//     alert("You clicked me!");
// }

// document.onkeydown = function (event) {
//     if(event.keyCode == 13) {
//         alert("You pressed the enter key");
//     } else {
//         alert("You pressed the " + event.keyCode + " key");
//     }
// }


//************************************************
// Lesson 17 - Css Manipulation
//************************************************

// document.getElementById("color_button").onclick = function () {
//  document.getElementById("color_button").style.backgroundColor = "red";
//  document.getElementById("color_button").style.transform = "translateX(100px)";
// }

// document.getElementById("color_button").onclick = function () {
//     this.style.backgroundColor = "red";
//     this.style.transform = "translateX(100px)";
//    }

// var button = document.getElementById("color_button");

// button.onclick = function () {
//     button.style.backgroundColor = "red";
//     button.style.transform = "translateX(100px)";
// }


//************************************************
// Lesson 18 - More getElement Methods
//************************************************

// var elements = document.getElementsByClassName("example");
// console.log(elements);

// var elements = document.getElementsByTagName("p");
// console.log(elements);


//************************************************
// Lesson 19 - For Loop / In Loop
//************************************************

// for (var a = 0; a < 5; a+=1) {
//     console.log(a);
// }

// var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];

// for (var a = 0; a < students.length; a++) {
//     console.log(students[a]);
// }

// var car = {
//     'Year': 2018,
//     'Model': 'Toyota',
//     'Manufacturer': 'Japan',
//     'FuelType': 'Petrol',
// }

// for (var prop in car) {
//     console.log(prop + " : " + car[prop]);
// }

// var elements = document.getElementsByClassName("example");

// for (var a = 0; a < elements.length; a++){
//     elements[a].style.color = "red";
//     elements[a].style.fontWeight = "bold";
// }


//************************************************
// Lesson 20 - While and do/while Loops
//************************************************

// var count = 0;

// while (count < 5) {
//     console.log(count);
//     count++;
// }

// var count = 10;

// do {
//     console.log(count);
//     count++;

// } while (count < 5);


//************************************************
// Lesson 21 - Conditional Statements
//************************************************

// var age = 17;

// if (age = 17) {
//     console.log("Underage");
// } else if (age >= 65) {
//     console.log('Senior');
// } else {
//     console.lo
// }

// grade = 7
// absences = 3

// //Solving the problem with && and ||
// if (grade >= 7((grade = 7 && absences <= 5)) {
//     console.log("The student hs been uproaded")
// } else {
//     console.log("The students has fail");
// }

// var name = "Vincen";

// if (name) {
//     console.log("The name is " + name);
// } else {
//     console.log("No name");
// }

// var total = 1000;

// if (total) {
//     console.log("The total is " + total);
// } else {
//     console.log("No total");
// }

// var firstName = "";

// console.log(name ? "The name is " + name : "No name");

// var age = 18;

// console.log(age < 18 ? "Underage" : age >= 65 ? "Senior" : "Adult");


//************************************************
// Lesson 22 - Nesting Loops and Conditions
//************************************************

// var isMember = false;
// var age = 17;

// if (isMember || age >= 65) {
//     console.log("You can have a discount");
// } else if (age < 18) {
//     console.log("$10");
// } else {
//     console.log("$20");
// }

// var employees = [

//     {
//         'name': 'Charles Silva',
//         'age': 45,
//         'children': ['Andrew Silva', 'Maria Silva']
//     },

//     {
//         'name': 'Elizabeth Green',
//         'age': 32,
//         'children': ['Peter Green']
//     },

//     {
//         'name': 'George Banks',
//         'age': 39,
//         'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
//     }
// ];

// document.getElementById("children").innerHTML = "";
// for (var a = 0; a < employees.length; a++) {
//     var childrenList = employees[a].children;
//     for (var b = 1; b < childrenList.length; b++) {
//         var child = childrenList[b];
//         document.getElementById("children").innerHTML += "<li>" + child + "</li>";
//     }
// }


//************************************************
// Lesson 23 - Variable Scope
//************************************************

// var personsname = "Vincen";

// function create_name() {
//     var personsName = "Vincen";
//     console.log(personsName);
// }

// create_name();

// if (true) {
//     var personsName = "Vincen";
//     console.log(personsName);
// }

// for (var a = 0; a < 5; a++) {
//     console.log("Parent Loop", a);

//     for (var b = 0; b < 5; b++) {
//         console.log("Child Loop", a);
//     }
// }

// function create_name() {
//     myName = "Vincen";
//     console.log(myName);
// }

// create_name();
// console.log(myName);


//************************************************
// Lesson 25 - Browser Object Model
//************************************************

// var myName = "Vincen";

// window.onmousemove = function (e) {
//     console.log("Mouse is moving");
//     console.log(e.pageY);
//     console.log(e.pageX);
// }


//************************************************
// Lesson 26 - Date & Time
//************************************************

// var dateObj = new Date();

// console.log(dateObj);

// document.getElementById("hours").innerHTML = new Date().getHours();
// document.getElementById("minutes").innerHTML = new Date().getMinutes();


//************************************************
// Challenge of lesson 26 - Calculating & Interval
//************************************************

// ordered: march 26, 2020
// delivered: april 2, 2020

// var orderDate = new Date(2020, 2, 26);
// // var orderDate = new Date("2020-03-26").getTime();
// var deliveryDate = new Date(2020, 3, 2);
// // var deliveryDate = new Date("2020-04-02").getTime();

// var leadTime = Math.floor((deliveryDate - orderDate) / 86400000);
// document.getElementById("delivery_time").innerHTML = leadTime + " days";


//************************************************
// Lesson 27 - Time Methods
//************************************************

// console.log("Message 1 ");

// window.setTimeout
//     (function () {
//         console.log("Message 2 ");
//     }
//         , 3000);

// document.getElementById("show-loader").onclick = function () {
//     document.getElementById("spinner-loader").style.display = "block";

//     window.setTimeout(function () {
//         document.getElementById("spinner-loader").style.display = "none";
//     }, 2000)
// }

// var count = 0;

// var timeInterval = window.setInterval(function () {
//     console.log(count);
//     count++;
//     if (count <= 5) {
//         window.clearInterval(timeInterval);
//     }
// }, 1000);


//************************************************
// Challenge of Lesson 27 - Create a Clock
//************************************************

// function addLeadZero(number) {
//     if (number < 10) {
//         return "0" + number.toString();
//     } else {
//         return number.toString();
//     }
// }

// window.setInterval(function () {

//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();

//     document.getElementById("hours").innerHTML = addLeadZero(hours);
//     document.getElementById("minutes").innerHTML = addLeadZero(minutes);
//     document.getElementById("seconds").innerHTML = addLeadZero(seconds);
// }, 1000);


//************************************************
// Lesson 28 - Break & Continue
//************************************************

// var x = 0;

// while (x < 10) {
//     console.log(x);
//     x++;

//     if (x == 5) {
//         break;
//     }
// }

// var num = 0;

// while (num <= 20) {
//     num++;

//     if (num % 2 != 0) {
//         continue;
//     }
//     console.log(num);
// }


//************************************************
// Lesson 29 - Form
//************************************************


// document.getElementById("show_option").onclick = function () {
// var selectField = document.getElementById("options");
// var selectedOption = selectField.options.selectedIndex;
// var selectedValue = selectField.options[selectedOption];
// document.getElementById("selected_option").innerHTML = selectedValue.innerHTML;
// console.log(selectedValue.innerHTML);

// var selectedOption = document.getElementById("options").value;
// console.log(selectedOption);


// document.getElementById("show_radio").onclick = function () {
//     var radio = document.getElementsByName("gender");

//     var radioSelected;

//     for (a = 0; a < radio.length; a++) {
//         if (radio[a].checked) {
//             radioSelected = radio[a];
//             console.log(radioSelected.value);
//             document.getElementById("selected_radio").innerHTML = radioSelected.value;
//         }
//     }
// }

// document.getElementById("show_check").onclick = function () {
//     var check = document.getElementsByName("interest");

//     document.getElementById("selected_check").innerHTML = "<ul>";

//     for (a = 0; a < check.length; a++) {
//         if (check[a].checked) {
//             document.getElementById("selected_check").innerHTML += "<li>" + check[a].value + "</li>";
//         }
//     }

//     document.getElementById("selected_check").innerHTML += "</ul>";
// }


//************************************************
// Lesson 30 - The onchange Event
//************************************************

// document.getElementById("education_level").onchange = function () {
//     var selectedField = document.getElementById("education_level");
//     var selectedOption = selectedField.options.selectedIndex;
//     var selectedValue = selectedField.options[selectedOption];
//     document.getElementById("selected_level").innerHTML = selectedValue.innerHTML;
// }

// var check = document.getElementsByName("meal");

// for (var a = 0; a < check.length; a++) {
//     check[a].onchange = function () {
//         document.getElementById("selected_check").innerHTML = "<ul>";
//         for (var b = 0; b < check.length; b++) {
//             if (check[b].checked) {
//                 document.getElementById("selected_check").innerHTML += "<li>" + check[b].value + "</li>"
//             }
//         }
//         document.getElementById("selected_check").innerHTML += "<ul>";
//     }
// }