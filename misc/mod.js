console.log(main(182, 281));

function main(x, y) {
   let x_count = 0;
   let y_count = 0;

   while (x !== 0) {
      x = Math.floor(x/10);
      ++x_count;
   }

   while (y !== 0) {
      y = Math.floor(y/10);
      ++y_count;
   }
   
   console.log(x_count);
   console.log(y_count);
   
   if (x_count === y_count) {
      return true;
   }
   return false
}
