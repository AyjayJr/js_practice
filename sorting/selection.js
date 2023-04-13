console.log(selectionSort([5,4,3,2,1]));
console.log(selectionSort([1,2,3,4,5]));
console.log(selectionSort([]));
console.log(selectionSort([1,0,-1]));

function selectionSort(arr) {
   for (let i = 0; i < arr.length - 1; ++i) {
      let min = i;
      for (let j = i + 1; j < arr.length; ++j) {
         console.log(arr, min, arr[j]);
         if (arr[j] < arr[min]) {
            min = j;
         }
      }
      if (i !== min) {
         let temp = arr[i];
         arr[i] = arr[min];
         arr[min] = temp;
      }
   }

   return arr;
}
