//PRIMITIVE DATATYPE (call by value)//
//These are of 7 types : String,Number,Boolean,null,undefined,Symbol,BigINT

//***************************NOTE************************************/
/*JavaScript is dynamic language and non static, which means that variables
can hold vaues of different types during runtime 
FOR EXAMPLE:- const score=1   and const socre = false (here we didn't told datatype)
    (as if int number in 1st case and boolean value in 2nd case)*/
 

               //   BUT IN JAVA  // 
 
 
 /*IN Java, JAVA is statically typed language, as it expects its variable
 to be declared before they can be assigned value 
            FOR EXAMPLE:-
                  int number =2;
          and boolean number = false (here we told the datatype) 
     */

/* USE OF SYMBOL DATATYPE- It is used to type unique 
      values(for e.g- ID) */
const id= Symbol('123');
const anotherId= Symbol('123');
console.log(id===anotherId); // false
//Value (123 is same in both id and anotherId but they are not same as 
// the return value is not same //


const bigNumber = 74297427492889824979872498n; //(This is bigINT as 
//It is represented in this way)//
const bigNumber1 = 74297427492889824979872498n;
const bigNumber2 = 353574297427492889824979872498;
console.log(typeof bigNumber1);//bigINT
console.log(typeof bigNumber2);//number
// It shows diffrence in writing bigint with and without 
// n(at lastin bigNumber1);




          


 // NON PRIMITIVE DATATYPE (refrence type)
// Types: Array,Objects,Functions
/* 1.)ARRAY */ const heroes=["Indian Army", "Sam Bahadur", "Hanuman"]
/* 2.)OBJECTS*/ let myObj1={
    name: "anant", // these  are objects and we can use any datatype
    age: 22
}

/*Functions */
const myFunction=function1();
function1()
{
    console.log("Hello World");
}
console.log(myFunction); //here Hello World will be printed 
console.log(typeof heroes);//object
console.log(typeof myObj1);//object
console.log(typeof myFunction); // here it will show function but usually 
// we call it as  function object //







/*============================IMPORTANT==============================//
escription
The following table summarizes the possible return values of typeof. For more information about types and primitives, see also the JavaScript data structure page.


Type	Result
Undefined	"undefined"
Null	"object" (reason)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol	"symbol"
Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
Any other object	"object"

*/

// LINK FOR THE emca webiste (documentation) //
//https://262.ecma-international.org/5.1/#sec-11.4.3
//

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//STACK AND HEAP MEMORY IN JAVASCRIPT 

//STACK- All the PREMITIVE DATATYPES are used in stack memory
//HEAP- All the NON-PREMITIVE DATATYPES are used in heap memory

//***************************************************************************************** */
// EXPLORING STACK MEMORY//
let val1= 23;
console.log(val1); // 23
let val2=val1
console.log(val2); // 23
val2 = 24; // changing the value of val2 to see whether val1 value's is changed or not 
console.log(val1); // 23
console.log(val2);// 24 
// So according to the above code we saw that in stack memory original value doesnot changed
// as the copy of the original value is sent in the val2 so even after changing the 
// value of value2(in line 105) to see whether val1 value's is changed or not
// as a result we saw that the value of val1 remain unchanged but ofcourse value of val2 changed

//***************************************************************************************** */
// EXPLORING HEAP MEMORY//

let userOne=
{
    email: "abc@gmail.com",
    upiId : "abc@yabl"
}
console.log(userOne.email); //abc@gmail.com

let userTwo=userOne

    userTwo.email="anant@gmail.com"
    console.log(userOne.email); //anant@gmail.com// changing email of userTwo to see whether email of userOne changed or not
    console.log(userTwo.email);// anant@gamil.com

// So according to above codes we learnt that in heap memory refrence of the varibale(here email) is copied
// so when we changed the value of the email in userTwo we saw that value of userOne also changed //
// resulting in the changed email in both userOne as well as userTwo (as shown in line number 126and 127) 



    
    












