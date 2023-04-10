console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1


function binarySearch(arr, target) {

   let low = 0;
   let mid = 0;
   let high = arr.length - 1;

   while (low <= high) {
      mid = Math.floor(low + ((high - low) / 2));
      
      if (arr[mid] == target) {
         return mid;
      }
      else if (arr[mid] > target) {
         high = mid - 1;
      }
      else if (arr[mid] < target) {
         low = mid + 1;
      }
   }

   return -1;
}
