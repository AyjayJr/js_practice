console.log(reverse('awesome'));     // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

// return a reverse of the given string recursively
function reverse(str) {
   let ret = []; 

   // helper function
   function recurse(str) {
      if (str === '') { return null; }
      recurse(str.slice(1));
      ret.push(str[0]);
      return;
   }

   recurse(str);
   return ret.join('');
}

// feel like there is a cleaner way to do this
