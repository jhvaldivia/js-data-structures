// O(n^2) time will grow exponentially to N.
const TEST_VALUE = 2;

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.time("time");
printAllPairs(TEST_VALUE);
console.timeEnd("time");
