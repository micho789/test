/* question 1 

var num = Number(prompt("Enter a number"));
console.log(num);

*/

/*    question 2 

var num = Number(prompt("Enter a number"));
if(num%3==0 && num%4==0){
    console.log("Yes");
}
else{
    console.log("No");
}

*/

/* question 3

var num1 = Number(prompt("Enter a first number"));
var num2 = Number(prompt("Enter a second number"));

if(num1>num2){
    console.log(num1);
}
else if (num2>num1) {
    console.log(num2);
} else {
    console.log("num1 = num2");
}

*/

/* question 4

var num = Number(prompt("Enter a number"));
if(num>0){
    console.log("positive");
}
else if (num<0) {
    console.log("negative");
}
else{
    console.log("zero");
}
    
*/

/* question 5

var num1 = Number(prompt("Enter a first number"));
var num2 = Number(prompt("Enter a second number"));
var num3 = Number(prompt("Enter a third number"));

if(num1>num2 && num1>num3){
    console.log("max element: " + num1 );
    if(num2>num3){
        console.log("min element: " + num3 );
    }else{
        console.log("min element: " + num2 );
    }
}else if(num2>num1 && num2>num3){
    console.log("max element: " + num2 );
    if(num1>num3){
        console.log("min element: " + num3 );
    }else{
        console.log("min element: " + num1 );
    }
}else{
    console.log("max element: " + num3 );
    if(num1>num2){
        console.log("min element: " + num2 );
    }else{
        console.log("min element: " + num1 );
    }
}

*/

/* question 6

var num = Number(prompt("Enter a number"));
if(num%2==0){
    console.log("even");
}else{
    console.log("odd");
}
*/

/* question 8

var char = prompt("enter a character")
if(char=='a'|| char=='e' || char=='i' || char=='o' || char=='u' || char=='A'|| char=='E' || char=='I' || char=='O' || char=='U' ){
    console.log("vowel");
}else{
    console.log("Consonant");
}

*/

/* question 9

var num = Number(prompt("Enter a number"));
for(var i=1 ; i<=num ; i++){
    console.log(i);
}
*/

/* question 10

var num = Number(prompt("Enter a number"));
for(var i=1 ; i<=12 ; i++){
    console.log(i*num);
}

*/

/*  question 11

var num = Number(prompt("Enter a number"));
for(var i=1 ; i<num ; i++){
    if(i%2==0){
        console.log(i);
    }
}

*/

/* question 12

var num1 = Number(prompt("Enter a first number"));
var num2 = Number(prompt("Enter a second number"));

console.log(num1**num2);

*/

/* question 12

var num1 = Number(prompt("enter a first mark"));
var num2 = Number(prompt("enter a second mark"));
var num3 = Number(prompt("enter a third mark"));
var num4 = Number(prompt("enter a fourth mark"));
var num5 = Number(prompt("enter a fifth mark"));

var total = num1+num2+num3+num4+num5;
var avg = total/5;
var percent = (avg/100)*100;

console.log("Total marks: " + total);
console.log("average marks: " + avg);
console.log("percentage: " + percent);

*/

/* question 13

var num = Number(prompt("Month Number:"))
if(num>0 && num<=12){
      if(num==1 || num==3 || num==5 || num==7 || num==8 ||num==10 || num==12){
        console.log("Days in Month: 31" );
      }
      else if (num==2){
        console.log("Days in Month: 28" );
      }
      else{
        console.log("Days in Month: 30" );
      }
}
else{
    console.log("invalid number , you should enter number from 1 to 12");
}

*/


/* question 14

var num1 = Number(prompt("Physics mark"));
var num2 = Number(prompt("Chemistry mark"));
var num3 = Number(prompt("Biology mark"));
var num4 = Number(prompt("Mathematics mark"));
var num5 = Number(prompt("Computer mark"));

var total = num1+num2+num3+num4+num5;
var avg = total/5;
var percentage = (avg/100)*100;
console.log("percentage = " + percentage)

if(percentage >= 90){
    console.log("Grad A");
}
else if(percentage >= 80){
    console.log("Grad B");
}
else if(percentage >= 70){
    console.log("Grad C");
}
else if(percentage >= 60){
    console.log("Grad D");
}
else if(percentage >= 40){
    console.log("Grad E");
}
else{
    console.log("Grad F");
}

*/

/*  question 15

var month = prompt("name of month :")
    switch (true) {
        case month=="february":  
          console.log("number of days : 28");
          break;
        case month=="april" || month== "june" || month== "septemper" || month== "november" :  
          console.log("number of days : 30");
          break;
        case month=="January" || month== "March" || month== "May" || month== "August" || month== "July" || month== "December" || month== "October" :  
          console.log("number of days : 31");
          break;
        default:
          console.log("invalid name of month");
          break;
    }

*/

/*  question 16

var char = prompt("enter a character")
switch(char=='a'|| char=='e' || char=='i' || char=='o' || char=='u' || char=='A'|| char=='E' || char=='I' || char=='O' || char=='U' ){
    case true:  
        console.log("vowel");
        break;
    default:
        console.log("Consonant");
        break;
}

*/


/*  question 17


var num1 = Number(prompt("enter a first num"));
var num2 = Number(prompt("enter a second num"));
switch (num1>num2) {
    case true:  
        console.log("num1 is a max number");
        break;
    default:
        console.log("num2 is a max number");
        break;
}

*/

/*  question 18

var x = Number(prompt("enter num"));
switch (x%2==0) {
    case true:  
        console.log("x is even");
        break;
    default:
        console.log("x is odd");
        break;
}

*/

/*  question 19

var x = Number(prompt("enter num"));
switch (true) {
    case x<0:  
        console.log("x is negative");
        break;
    case x>0:  
        console.log("x is positive");
        break;
    default:
        console.log("x is zero");
        break;
}

*/
/*  question 20

var num1 = Number(prompt("enter a first num"));
var num2 = Number(prompt("enter a second num"));
var operator = prompt("enter a operator of them (+ , - , / , * )")


switch (operator) {
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        if(num2==0){
            console.log("error");
        }
        else{
            console.log(num1/num2);
        }
        break;
    default:
        console.log("invalid , you should enter a operator of them (+ , - , / , * )");
        break;
}
        
*/