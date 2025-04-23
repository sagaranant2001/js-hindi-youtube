/* 1st way to define a string  */
const name= "anant";
const repoCount = 5;
console.log(name + repoCount + "value"); // Here anant5 value will be printed
/* In modern era of javasciprt code dont concatenate strings,int or other thing like this...........ins
instead they use backtick (``)......This process is called STRING INTERPOLATION.
In this process we make placeholders and directly inject value  
FOR EXAMPLE ----*/
console.log(`Hello this is ${name} and my reopCounts are ${repoCount}`);
/* This syntax is more prefered in concatenation as it is more realable and relaible */


/* 2nd way too declare a STRING */
const studentName = new String ('anant-sagar');
console.log(studentName[0]); //output will be a
console.log(studentName.__proto__); // output will be {} hich symbolises ki object ban gaya hai....
console.log(studentName.length); // output will be 10
console.log(studentName.toUpperCase); // output will be ANANTSAGAR .... This doesnot changed our original value of studentName//
console.log(studentName.charAt(3));//output will be n//
// console.log(studentName.indexOf(n));//output will be 1//
const studentNamesubstring=studentName.substring(0 /*starting string*/,4/* ending string*/);
console.log(studentNamesubstring); // output will be anan (this means 4th index in excluded, only a=0,n=1,a=2,n=3 is included) //

// Slice method of STRING //
const anotherString=studentName.slice(-10,4) // output will be (start the lecture from 14.00)



 







