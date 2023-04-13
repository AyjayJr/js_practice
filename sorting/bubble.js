console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([5,2,3,1,4]));
console.log(bubbleSort([]));
console.log(bubbleSort([1,0,-1]));
console.log(bubbleSort([1,0]));


function bubbleSort(arr) {
   for (let i = 0; i < arr.length; ++i) {
      for (let j = 0; j < arr.length - i; ++j) {
         let temp = 0;
         if (arr[j] > arr[j+1]) {
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
         }
      }
   }
   return arr;
}
