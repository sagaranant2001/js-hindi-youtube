let score1 = 33
console.log(typeof score1); //  Output will be number
// asking score1's type by passing it into method
console.log(typeof (score1)); //  Output will be number

let score2 = "33"
console.log(typeof score2); //  Output will be string
// asking score2's type by passing it into method
console.log(typeof (score2)); //  Output will be string

let valueInNumber1 = Number(score2) // While converting we have to write capital N   IN Number
/* In line 11 we converted string datatype into number(int) datatype */
console.log(typeof valueInNumber1); // output will be number

let score3 = "33abc"
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2); //Output will be number 
/* but if you see value of score3,it is not a pure or proper number
(mixture of number and string) */
console.log(valueInNumber2); // Output will be NaN 
/* NaN means that (Not A Number) */

let score4 = null
let valueInNumber3 = Number(score4) // Output will be 0 //

let score5 = undefined;
let valueInNumber4 = Number(score5) // Output will be NaN //

let score6 = true;
let valueInNumber5 = Number(score6) // Output will be 1 //

let score7 = false;
let valueInNumber6 = Number(score7) // Output will be 0 //

let score8 = "Anant";
let valueInNumber7 = Number(score8) // Output will be NaN //


// Summary of line (1- 36) //
/*
"33" = 33     (Can be converted)
"33abc" = NaN (Can't be converted)
true = 1
false = 0 
*/

let isLoggedIn1 = true;
console.log(isLoggedIn1); // Outut will be 1

let isLoggedIn2 = 1;
let boolean1 = Boolean (isLoggedIn2);
console.log(boolean1isLoggedIn2); //Output will be true
/* here we converted 1(int number) into Boolean value (true)*/

let isLoggedIn3 = 0;
let boolean2= Boolean (isLoggedIn3);
console.log(booleanis2LoggedIn3);  // Output will be false
/* here 0 is converted into false(boolean type) */

let isLoggedIn4= "";
let boolean3= Boolean (isLoggedIn4);
console.log(booleanis3LoggedIn4);  // Output will be false
/* here empty string(*) is converted into false(boolean value) */

let isLoggedIn5 = "anant";
let boolean4= Boolean (isLoggedIn4);
console.log(booleanis3LoggedIn4);  // Output will be true
/* here we converted String("anant") into Boolean value (true) */

// Summary of line (47-68) //
/*
1 = true
0 = false
"" (empty string) = false 
"anant" = true
*/

let someNumber1 = 38;
let stirngNumber = String(someNumber1);
console.log(stirngNumber); 
/* Output will be 33 instead of converting int number(33)
into string but if we print type of(stringNumber) then it is srring
*/
console.log(typeof stirngNumber); // output will be string

/***********************OPERATIONS ************************************/

let value = 3;
let negativeValue = -value;
console.log(negativeValue);  // Output will be -3 //

console.log(2+2); // Output will be 4
console.log(2-2); // Output will be 0
console.log(2/2); // Output will be 1 (Quotient)
console.log(2%2); // Output will be 0 (Reminder)
console.log(2*2); // Output will be 4
console.log(2**2);// Output will  be 4(2 ka power 2)
console.log(2**3);// Output will be 8 (2 ka power 3)

let str1 = "Hello";
let str2 = " Anant";
let str3 = str1 + str2;
console.log(str3); // Output will be Hello Anant //log

console.log("1" + 2); //Output will be 12
console.log(1 + "2"); //Output will be 12
console.log(1 + 2);  //Output will be 3
console.log("1" + 2 + 2);//Output will be 122
console.log(1 + 2 + "2");//Output will be 32

console.log(true); //Output will be true;
console.log(+true);//Output will be 1 //But not prefrable to use in industry
console.log(+"");//Output will be 0 //But not prefrable to use in industry


let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"




