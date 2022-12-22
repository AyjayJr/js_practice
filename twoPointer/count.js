countUnique([1,1,1,1,1,2]);               // 2
countUnique([1,2,3,4,4,4,7,7,12,12,13]);  // 7
countUnique([]);                          // 0
countUnique([-2,-1,-1,0,1]);              // 4


// return the amound of unique values in the array
function countUnique(arr) {

   // instantiate two pointers at the beginning
   // create a count variable
   // move 2nd pointer until it sees a unique value
   // increment the count variable
   // move 1st pointer to 2nd position
   // repeat the process


   let count = 0;
   let [i, j] = [undefined, undefined];

   for (i = 0; i < arr.length; i++) {
     if (arr[i] !== arr[j]) {
        count += 1;
        j = i;
     }
   }

   console.log(count);
   return count;
}
