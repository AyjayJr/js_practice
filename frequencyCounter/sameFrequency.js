console.log(sameFrequency(182, 281));          // true
console.log(sameFrequency(34, 14));            // false
console.log(sameFrequency(3589578, 5879385));  // true
console.log(sameFrequency(22, 222));           // false


// given two positive integeres find out if the two numbers have the same frequency of digits
function sameFrequency(a, b) {
   // must first make the integers into strings in order to iterate over the digits
   a = a.toString();
   b = b.toString();

   // if they're not the same length they also don't have the same frequency
   if (a.length !== b.length) {
      return false;
   } 

   // create 2 frequency objects
   // store the frequency of each digit in variable a and b
   // compare the freqeuncy of digits in b to a
   // if the digit does not exist in a return false
   // if the digit exists but the frequency is different return false
   // else return true


   let freq1 = {};
   let freq2 = {};

   for (let i = 0; i < a.length; i++) {
      let digit = a[i];
      freq1[digit] = (freq1[digit] || 0) + 1;
   }

   for (let i = 0; i < b.length; i++) {
      let digit = b[i];
      freq2[digit] = (freq2[digit] || 0) + 1;
   }
   
   for (let i = 0; i < b.length; i++) {
      let key = b[i];
      
      if (!(key in freq1)) {
         return false;
      }


      if (freq2[key] !== freq1[key]) {
         return false;
      }
   }

   return true;
}
