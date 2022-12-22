console.log(minSubarrayLen([2,3,1,2,4,3], 7));                 // 2
console.log(minSubarrayLen([2,1,6,5,4], 9));                   // 2
console.log(minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 39));       // 3
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 55));       // 5
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 95));       // 0
console.log(minSubarrayLen([4,3,3,8,1,2,3], 11));              // 2

// return the min length of a subarray whose sum is greater than or equal to the sum passed to it
function minSubarrayLen(arr, sum) {

   // slide window until you are >= sum
   // save the result to minSize
   // start at next index and repeat?

   let minSize = Infinity;
   let tempSize = 0;
   let tempSum = 0;

   let [i, j] = [0, 0];
   while (j < arr.length) {
      tempSum += arr[j];
      if (tempSum >= sum) {
         minSize = Math.min(minSize, j - i + 1);
         tempSum = 0;
         i = j + 1;
         // console.log('minSize = ' + minSize);

      }
      j++;
   }

   if (minSize === Infinity) {
      minSize = 0;
   }
   return minSize;
}
