
let names =[];
console.log(names);

let courses = ['HTML', 'CSS', 'JavaScript'];  //
console.log(courses);
// search the element use includes 
console.log(courses.includes('CSS',0));   // return true if it is

let subjects = new Array('Math','Physics');   //creating an array using the constructor function of array
console.log(subjects);

// Initializing Array while declaring
let arr = new Array(3);
arr[0]='Hello';
arr[1]= 'true';
arr[2]='Hi';

let Empname = ['RAJVEE' , 'MONA', 'SARA', 'SAPNA' , 'REETA'];
//POSITIV 
console.log(Empname[2]);
//NEGATIVE 
console.log(Empname.length - 1);
// Add Element to the end of Array
Empname.push("Rahul");
// Add Element to the beginning
Empname.unshift("Zara");

// Removes and returns the last element
console.log(Empname.pop());
//Removes and returns the first element
console.log(Empname.shift()) ;
// Removes 2 elements starting from index 1
Empname.splice(1,2);



