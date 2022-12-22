console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting'));        // true
console.log(isSubsequence('abc', 'abracadabra'));   // true
console.log(isSubsequence('abc', 'acb'));           // false (order matters)

// determine whether the characters in str1 appear in str2 without changing their order
function isSubsequence(str1, str2) {

   // create two pointers, one that points the start of str1 and the other at str2
   // looping condition will be the length of str2
   // loop through str2 and compare the character from str1
   // if found move str1 pointer ahead else do nothing
   // move str2 pointer ahead
   // if str1 pointer == str1.length - 1, return true
   // else return false

   let [p1, p2] = [0, 0];

   while (p2 < str2.length) {
      if (str1[p1] === str2[p2]) {
         ++p1;
      }
      if (p1 === str1.length) {
         return true;
      }
      ++p2;
   }

   return false;
}
