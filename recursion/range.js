console.log(range(6)); // 21
console.log(range(10)); // 55

// add up all the numbers from 0 to the number passed to the function
function range(num) {
   if (num === 0) { return 0; }
   return num + range(num-1);
}
