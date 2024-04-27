var game = [[12,13],
            [20,30],
            [40,50]];


var arr_2d = new Array(5); // Create a 2D array with 5 rows.
for(var i = 0 ; i<arr_2d.length ; i++){
  // arr_2d[i] = new Array(5);
  arr_2d[i] = new Array(i,i+1 , i+2 , i+3 , i+4);
}
console.log(arr_2d);