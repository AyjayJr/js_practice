console.log(insertionSort([5,4,3,2,1]));
console.log(insertionSort([]));
console.log(insertionSort([1,0,-1]));

function insertionSort(arr) {
   for (let i = 1; i < arr.length; ++i) {
      let currentVal = arr[i];
      for (var j = i - 1; j >= 0; --j) {
         if (currentVal < arr[j]) {
            arr[j+1] = arr[j];
         }
      } 
      arr[j+1] = currentVal;
   }
   return arr
}
