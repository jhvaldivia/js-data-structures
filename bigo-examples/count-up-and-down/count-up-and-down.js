// O(2n) = O(n) time will grow proportionally to N.
// 2 as it's a constant is not relevant to the overall time.
const TEST_VALUE = 20;

function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
}

console.time("time");
countUpAndDown(TEST_VALUE);
console.timeEnd("time");
