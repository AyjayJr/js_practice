console.log(validAnagram2('',''));                           // true
console.log(validAnagram2('aaz','zza'));                     // false
console.log(validAnagram2('anagram','nagaram'));             // true
console.log(validAnagram2('rat','car'));                     // false
console.log(validAnagram2('awesome','awesom'));              // false
console.log(validAnagram2('qwerty','qeywrt'));               // true
console.log(validAnagram2('texttwisttime','timetwisttext')); // true


// determine whether s1 is and anagram of s2
// pretty verbose solution
function validAnagram(s1, s2) {

   // if they are not the same length clearly not an anagram
   if (s1.length !== s2.length) {
      return false;
   }

   // create frequency counters
   let freq1 = {};
   let freq2 = {};

   // for every letter in the string store the frequency of the letter in the string 
   // note that for/in loops in js for strings always output the key i.e. the index
   for (let key in s1) {
      freq1[s1[key]] = (freq1[s1[key]] || 0) + 1;
   }
   for (let key in s2) {
      freq2[s2[key]] = (freq2[s2[key]] || 0) + 1;
   }

   // make sure each letter has the same frequency in both strings
   for (let key in freq1) {
      //
      // if they don't have the same letters then return false
      //
      if (!(key in freq2)) {
         return false;
      }
      //
      // if the frequency does not match, return false
      //
      if (freq2[key] !== freq1[key]) {
         return false;
      }
   } 

   return true;
}

function validAnagram2(s1, s2) {
   if (s1.length !== s2.length) {
      return false;
   }

   const freq = {};

   // loop through first string and store frequency of letters
   for (let i = 0; i < s1.length; i++) {
      let letter = s1[i];
      //
      // add 1 to freq if already exists, else instantiate to 1
      //
      freq[letter] ? freq[letter] += 1 : freq[letter] = 1;
   }

   for (let i = 0; i < s2.length; i++) {
      let letter = s2[i];
      //
      // if the letter in s2 doesn't exist in s1 return false
      //
      if (!freq[letter]) {
         return false;
      }
      //
      // else decrement the that occurence of the letter from the counter
      //
      else {
         freq[letter] -= 1;
      }
   }

   return true;
}
