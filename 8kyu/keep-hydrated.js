// You get given the time in hours and 
// you need to return the number of litres Nathan will drink, rounded to the smallest value.


// time = 3 ----> litres = 1

// time = 6.7---> litres = 3


//** My Solution **//
function litres(time) {
    return Math.floor(time*0.5);
  }