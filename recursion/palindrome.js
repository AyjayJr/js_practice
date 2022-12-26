console.log(isPalindrome('awesome'))                    // false
console.log(isPalindrome('foobar'))                     // false
console.log(isPalindrome('tacocat'))                    // true
console.log(isPalindrome('amanaplanacanalpanama'))      // true 
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

// recursive function to find if a string is a palindrome
function isPalindrome(str) {

   let ptr = 0;
   let flag = false;
   let forward = str;

   function recurse(str) {
      if (str === '') { return null; }
      recurse(str.slice(1));
       
   }

}
