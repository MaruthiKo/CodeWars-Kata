// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


//* My Solution *//
function getSum( a,b )
{
  let lower,higher;
  let result=0;
   //return either of it if they are equal
   if(a == b){
    return a;
   }else{
 
      if(a > b){
        higher = a;
        lower = b
      }else{
        higher = b;
        lower = a;
      }
 
      for(i=lower;i<=higher;i++){
       result += i;
      }
 
    }
    return result;
}