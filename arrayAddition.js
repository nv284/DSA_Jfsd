let a = [[2,3] , 
         [6,9]];

let b = [[3,4] , 
         [7,8]];

let c = [[] , []];

for(let i = 0; i < a.length; i++){
    for(let j = 0; j < a[i].length; j++){
         c[i][j] = a[i][j]+b[i][j];
    }
}
console.log(c); //[[5,12],[13,17]]</