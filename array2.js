let A = [23,44,55,67,89,32,44,66,77];

let itr = A.keys(); // returns an iterator object
console.log(itr);  // Logs the iterator object to the console

for( let key of itr){
    console.log(key);   // Prints each index in array 'A'
}

//array.reduce( function(total, currentValue, currentIndex, arr), initialvalue)

let abc = [10, 20, 30, 40, 50, 60];

function myFun(total , num ){
    return total + num ;
}

function redFun(){
    console.log(abc.reduce(myFun));
}
redFun();