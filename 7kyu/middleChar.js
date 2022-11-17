// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.


//* My Solution *// 
function getMiddle(s)
{
  let low = 0;
  let high = s.length - 1;
  let mid  = Math.floor((low + high)/2);
  if(s.length > 1){ // if length of s is greater than check if it's even or odd 
    if(s.length % 2 == 0){
      return `${s[mid]}${s[mid+1]}` 
    }
    return s[mid]; // else return middle element
  }
  return s; // if length of s is not greater than 1
}