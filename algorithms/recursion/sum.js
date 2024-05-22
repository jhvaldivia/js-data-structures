// time: O(n)

const sum = (arr) => {
  //base case
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sum(arr.slice(1));
};

console.log(`The sum is: ${sum([1, 2, 7, 6])}`);
