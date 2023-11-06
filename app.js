// chapter 9 q 1
var city = prompt();
if(city == "karachi"){
    alert("“Welcome to city of lights”");
}
                // chapter 9 q 2

var gender = prompt();
if(gender === "male"){
    alert("Good Morning Sir.");
} 
else if(gender === "female"){
    alert("Good Morning Mam.");
}else(alert("no male or Female"))
                // chapter 9 q 3

var color = prompt()
if (color == "Red") {
    alert("Must Stop");
} else if(color =="Yellow"){
    alert("Ready to move");
} else if(color == "Green"){
    alert("Move Now");
}

                // chapter 9 q 4
var fuel = prompt()
if(fuel <0.25){
alert("“Please refill the fuel in your car”")
}else {
    alert("jany do")
}
                // chapter 9 q 5
      var a = 4;
     if (++a === 5){
     alert("given condition for variable a is true");
            }

     var b = 82;
     if (b++ === 83){
     alert("given condition for variable b is true");
     }

     var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }


                // chapter 9 q 6

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
                //  chapter 9 q 6
   if (true){
   alert("True");
    }
   if (false){
   alert("False");
    }


                 // chapter 9 q 7

   if("car" < "cat"){
      alert("car is smaller than cat");
      }

                 // chapter 9 q 8
var mark_sheet = "<h1>Marks Sheet</h1>"
document.write(mark_sheet);
var totalMarks = prompt("Total Marks");
if(totalMarks == 300){
    document.write("Tolat Marks : "+totalMarks);
}else if(totalMarks == 200){
    document.write("Tolat Marks : "+totalMarks);

}
else if (totalMarks == 100) {
    document.write("Tolat Marks : " +totalMarks);
    
} else{
    document.write("You Failed");
}

var obtained = prompt("Obtained Marks")
if (obtained == obtained) {
    document.write("Marks Obtained : "+ obtained + "</br>")
}
var percentage = prompt("Percentage")
if(percentage>=80){
document.write("Percentage :" + percentage + "%");
}
else if(percentage>=70){
    document.write("Percentage :" + percentage + "%");
}
var markSheet = "<h1>Marks Sheet</h1>";
document.write(markSheet)
var islamicStudies = 100;
var math = 100;
var english = 100;

var totalMarks = islamicStudies + math + english ;
document.write("Total Marks : " +totalMarks + "<br>");

var obtainedMarks = prompt("Obtained Marks");
 document.write("Obtained Marks : "+ obtainedMarks + "<br>");
var mix = obtainedMarks*100/300;
if (mix >= 80){
    document.write("Percentage"+ mix + "%"+ "<br>" + "Grade : A-One" + "<br>"+"Remarks : Excellent");
}
 else if (mix >= 70){
    document.write("Percentage"+ mix + "%"+ "<br>" + "Grade : A" + "<br>"+"Remarks : Good");

 }
 else if (mix >= 60){
    document.write("Percentage"+ mix + "%"+ "<br>" + "Grade : B" + "<br>"+"Remarks : You Need To Improve");

 }
 else if(mix < 60){
    document.write("Percentage"+ mix + "%"+ "<br>" + "Grade : Fail" + "<br>"+"Remarks : Sorry");

 }


                 // chapter 9 q 9
var secretNumber = 7;
var guesNumber = prompt("guess number");
if(guesNumber == secretNumber){
   alert("Bingo! Correct Answer");
}else if (guesNumber == secretNumber+1) {
   alert("“Close enough to the correct answer”");
} else {
   alert("try again");
}{
   
}



                  // chapter 9 q 9


var num = +prompt(" Enter your number   ")
if (num % 3 == 0) {
      alert(" the number is divisible by 3  ")
}
else {
      alert(" the number is  not divisible by 3  ")
            }
                    // chapter 9 q 10

var number = prompt("Enter a number: ");
if(number % 2 == 0) {
    alert("The number is even.");
}
else {
   alert("The number is odd.");
}

                    // chapter 9 q 11
var temp = prompt();
if (temp > 40) {
    alert("“It is too hot outside.”")
} else if (temp > 30) {
    alert("“The Weather today is Normal.”")
}else if (temp > 20) {
    alert("“Today’s Weather is cool.”")
}
else if (temp > 10) {
    alert("“OMG! Today’s weather is so Cool.”")
}
 else {
    alert("enjoy the weather")
} {
    
}

                    // chapter 9 q 12

// JavaScript program for 
// simple mathematical calculations 

// Add two numbers 
function add(num1, num2) { 
	return num1 + num2; 
} 

// Function for subtraction 
function subtract(num1, num2) { 
	return num1 - num2; 
} 

// For multiplying of two numbers 
function multiply(num1, num2) { 
	return num1 * num2; 
} 

// Function for division of 
// two numbers 
function divide(num1, num2) { 
if(num2 === 0) return undefined; 
	return num1 / num2; 
} 

// Creating variables for 
// num1 and num2 
let num1 = prompt("first Number"); 
let num2 = prompt("Second Number"); 

let operation = prompt("operator sing"); 

let result; 

if (operation === "+") { 
	result = add(num1, num2); 
} else if (operation === "-") { 
	result = subtract(num1, num2); 
} else if (operation === "*") { 
	result = multiply(num1, num2); 
} else if (operation === "/") { 
	result = divide(num1, num2); 
} else { 
	result = "Invalid operation"; 
} 
console.log("The Result of this operation is : " + result);
