function twoDimentionArray(rows, cols) {

    let arr = [] ;

    //creat 2d array 
    for(let i=0 ; i<rows ; i++){
        for(let j=0 ; j<cols;j++) {
            arr[i]=[];

        }
    }


    //inserting element in the array 
    for(let i=0 ; i<rows ; i++){
        for(let j=0 ; j<cols ; j++ ){
              arr[i][j] = j;
        }
    }
    return arr;
}

const result = twoDimentionArray(2,3);
console.log(result );


let student = [['Sachin' ,23] ,['Rahul',24]];
for(let i=0 ; i<student.length ; i++){
    for(let j=0 ; j<student.length ; j++){
                 console.log(student[i][j]);
    }
}

let arr = [];
let rows = 4;
let columns = 3;

let value = 0 ;

for (let i =0 ;i<rows ;i++){
    arr[i]=[] ;
    for(let j = 0 ; j<columns ;j++){
         arr[i][j] = value++ ;
    }
}