// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



//* My Solution *//
function findShort(s){
    let words = s.split(' ');
    let min = 999;
    for(let i=0;i<words.length;i++){
      if(min > words[i].length){
        min = words[i].length
      }
    }
    return min;
  }



