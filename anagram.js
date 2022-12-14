console.log(validAnagram('',''));                           // true
console.log(validAnagram('aaz','zza'));                     // false
console.log(validAnagram('anagram','nagaram'));             // true
console.log(validAnagram('rat','car'));                     // false
console.log(validAnagram('awesome','awesom'));              // false
console.log(validAnagram('qwerty','qeywrt'));               // true
console.log(validAnagram('texttwisttime','timetwisttext')); // true


// determine whether s1 is and anagram of s2
function validAnagram(s1, s2) {

   // if they are not the same length clearly not an anagram
   if (s1.length !=== s2.length) {
      return false;
   }

   // create frequency counters
   let freq1 = {};
   let freq2 = {};

   // for every letter in the string store the frequency of the letter in the string 
   for (let val in s1) {
      freq1[val] = (freq[val] || 0) + 1;
   }
   for (let val in s2) {
      freq1[val] = (freq[val] || 0) + 1;
   }

   // 
   for (let key in freq1) {
      if (
   } 
}
