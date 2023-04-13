// console.log(bubbleSort([5,4,3,2,1]));
// console.log(bubbleSort([5,2,3,1,4]));
// console.log(bubbleSort([]));
// console.log(bubbleSort([1,0,-1]));
// console.log(bubbleSort([1,0]));
console.log(bubbleSort([1,2,3,4,5]));

function bubbleSort(arr) {
   let noSwaps = true;
   for (let i = arr.length; i > 0; --i) {
      for (let j = 0; j < i - 1; ++j) {
         console.log(arr, arr[j], arr[j+1]);
         if (arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;
         }
      }
      if (noSwaps) { break; }
   }
   return arr;
}
