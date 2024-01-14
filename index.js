
function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i < array.length; i++) {
    let difference = target - array[i];
    for (let j = i + 1; j < array.length; j++)
      if (array[j] === difference) return true;
  }
  return false;
}

  // Target sum  algorithm 




/* 

  The function iterates through the array once using a for...of loop, which has a time complexity of O(n), where 'n' is the length of the array.
Inside the loop, each set operation (addition and lookup) has an average time complexity of O(1) for a well-implemented set data structure.
The overall time complexity is dominated by the loop, resulting in a final time complexity of O(n).
*/

/* 
if any two numbers in the array add up to the target -> true
  else return false*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
