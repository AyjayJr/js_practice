console.log(duplicates(1,2,3));              // false
console.log(duplicates(1,2,2));              // true
console.log(duplicates('a', 'b', 'c', 'a')); // true


// implement function that acceptes variable number of arguments and checks for duplicates
function duplicates(...args) {
   // this is going to be o(n) solution

   let freq = {};
   for (let i = 0; i < args.length; i++) {
      let key = args[i];
      freq[key] = (freq[key] || 0) + 1;
      if (freq[key] > 1) {
         return true;
      }
   }

   return false;
}


// o(n log n) solution
function duplicates2(...args) {
   // must first sort args
   // then any duplicates will be next to each other
   // create pointers i and i + 1
   // iterate throughout, if they are ever equal return true
   // else return false


}
