const accountId= 144553 // const is used when constant value is given, means that the value cannot be changed.//

let accountEmail ="anant@gmail.com" /*let variable is used as it uses the concept of scope that 
 means it has fixed scope*/
var accountPassword="12345" 
/* Prefer not to use var because of issue in block scope and fuctioanal scope(this will be taught later)*/ 
accountCity="Delhi"/* You can assign values to variable without giving let and const. But it is not prefer to use*/ 

// accountId= 2
console.table([accountId,accountEmail,accountPassword,accountCity]);
/* this means that using [] we can print multiple variables in one console.table statements insaed of using multiple
 console.log lines..................*/

console.log(accountId);
