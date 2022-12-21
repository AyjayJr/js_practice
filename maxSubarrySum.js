console.log(maxSubarraySum([100,200,300,400], 2))       // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))        // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) // 5
console.log(maxSubarraySum([2,3], 3))                   // null

// find maximum sum of a subarray with the length of the number passed
function maxSubarraySum(arr, len) {
   // short circuit if arr.length < len
   // loop through the arr up to point len
   // save that to variable
   // if tempSum > maxSum, maxSum = tempSum
   // add the next value in the array and subtract the value from the front
   // do comparison again until maxSum is found
   
   if (arr.length < len) {
      return null;
   }

   let [maxSum, tempSum] = [0, 0];

   for (let i = 0; i < len; i++) {
      maxSum += arr[i];
   }

   tempSum = maxSum;
   for (let i = len; i < arr.length; i++) {
      tempSum = tempSum + arr[i] - arr[i - len];
      maxSum = Math.max(maxSum, tempSum);
   }

   return maxSum;
}
