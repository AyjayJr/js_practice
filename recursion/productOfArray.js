console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60

// very easy once you know the correct array functions
function productOfArray(arr) {
   if (arr.length === 0) { return 1; }
   return arr.at(0) * productOfArray(arr.slice(1));
}
