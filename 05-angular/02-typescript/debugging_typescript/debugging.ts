//1. Setting types

var myString: any;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;

//=> type of myString is string, therefore we can't set it a number

//--------------------------------------

// 2. setting type in functions

function sayHello(name: any){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(9));
// the function input is set to be a string. 9 is not a string
//---------------------------------------

//3. Optional parameters
function fullName(firstName: string, lastName: string, middleName?: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

//added a ? after middleName made it optional
//-----------------------------------------------

//4. 

interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));
//missing the s in belts created the error. 
//---------------------------------------------

//5. 

class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja('Nha','Le');
// Error because we didn't pass in the parameters that required
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
interface ninjaInterface {
   fullName: string,
   firstName: string,
    lastName: string
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: ninjaInterface){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));
//we need to set a interface for input of programmer. 
//---------------------------------------------------

//6. Arrow Function
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
function math(x,y){
    let sum = (x,y) => x + y;
    let product =(x,y) => x * y;
    let difference = (x,y) => (x-y);
return [sum, product, difference]};
//made math a function with x and y parameters. 
//----------------------------------------------

//7. Arrow function and this. 
class Elephant {
   constructor(public age: number){}
   birthday = age => this.age++;
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// changd function using arrow 
