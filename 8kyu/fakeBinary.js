// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


//* My Solution *//
function fakeBin(x){
    let a = [];
    
    for(let i=0;i<x.length;i++){
      if(x[i] < 5){
        a.push('0')
      }else{
        a.push('1')
      }
    }
    return a.join("");
  }