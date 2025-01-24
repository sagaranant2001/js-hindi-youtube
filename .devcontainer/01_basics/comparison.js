console.log(2>1); //true
console.log(2>=1); //true
console.log(2<1); // false
console.log(2==1);//false
console.log(2!=1);//true
console.log("2">1);//true  as js compiler automatically converted "2"(string) into number


console.log("02">1);//true 
console.log(null>0);//false as null is empty value
console.log(null==0);//false here Comparison sing is not there null is not converted into 0
console.log(null>=0); //true 
/////**************************NOTE ***********************/////////
/* THE REASON IS THAT AN EQU ALITY CHECK(==) AND COMPARISON 
(>,<,>=,<= WORKS DIFFERENTLY)
 COMPARISONS CONVERT NULL TO A NUMBER, TREATING IT AS 0
  THAT'S WHY 
  null>=0 is true 
  and
null>0 is false */

console.log(undefined==0);//false
console.log(undefined>0); //false
console.log(undefined<0); //false


//****************Checking(===)*************************************/
console.log("2"===2); //false
/* IN (===)  compiler check both datatype and the values 
So thats the reason here it is giving false
as "2"(String) is not equal to 2(number)*/



