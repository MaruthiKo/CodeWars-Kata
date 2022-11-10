// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//* My Solution *// 
function getCount(str) {
    let count = 0;
    let vowels = ["a","e","i","o","u"];
    for(let letter of str){
      if(vowels.includes(letter)){
        count += 1;
      }
    }
    return count;
  }