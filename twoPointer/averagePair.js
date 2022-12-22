console.log(averagePair([1,2,3], 2.5))               // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))  // true
console.log(averagePair([-1,0,3,4,5,6], 4.1))        // false
console.log(averagePair([], 4))                      // false


// given a sorted array determine if there is a pair of values in arr that equal avg
function averagePair(arr, avg) {
   // make two pointers, one at start, other at end
   // evaluate the avg of the values at these pointers
   // if the avg is too small move the start pointer left
   // if the avg is too large move the end pointer right
   // continue looping while left < right

   let left = 0;
   let right = arr.length - 1;

   while (left < right) {
      if (arr[left] + arr[right] / 2 === avg) {
         return true;
      }
      else if (arr[left] + arr[right] / 2 < avg) {
         left++;
      }
      else if (arr[left] + arr[right] / 2 > avg) {
         right--;
      }
   }

   return false;
}
