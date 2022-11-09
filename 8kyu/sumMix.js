// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//* My Solution *//
function sumMix(x){
    let arr = x.map(ele => Number(ele));
     return arr.reduce((acc,curr) => acc+curr,0)
   }