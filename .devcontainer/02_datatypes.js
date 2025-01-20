"use strict" // it is used that tells that all the JS code is treated as newer version //

 alert(3+3) /*If we run this line in nodejs is will throw error as it has different syntax for running 
 this line in nodejs
 But if we run this line in browser then it will run fine and give output as 6  
 */
console.log(3+3); //this is prefrable //
console.log(3   // this is not prefrable
    +3);        // CODE REDABILITY SHOULD BE HIGH,GOOD AND SUSTAINABLE//
 
 
    /* TO READ ABOUT JS STANDARDS
PREFER TWO SITES
1.)developer.mozzila.org (https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
 // easy to understand and uses simple language //
2.) tc39.es ECMAScript  (https://tc39.es/ecma262/2023/multipage/)
// Uses high level language
*/

let name ="Anant" // STRING Datatype
let age =20  // INT Datatype
let isLoggedIn = true //BOOLEAN Datatype

///========================PRIMITIVE DATATYPE=============================================////
// number int => range is 2 to power 52 or 53 //
// bigint => used for very big numbers //
// string => "" and '' both can be used........Usually prefer "" only //
// boolean => return true or false //
// null => standlone value for example

let state =null;
console.log(state); // it will give output as null //

let empty;
console.log(empty); // it will give output as undefined //

// symbol => gives unique value usually used in reactjs //

//================================NON PRIMTIVE DATATYPE==================================///
// object 

/* typeof-- It means that it gives typeof value for example if we ask "anant" is 
of what type so  it will give String*/
 console.log(typeof "anant"); // String
console.log(typeof 34); //  number 
console.log(typeof undefined); // undefined
console.log(typeof null); // object 










































 



 
