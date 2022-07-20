// O(1) time will remain the same regardless of N
const TEST_VALUE = 2000000;

function addUpTo(n) {
  return n * (n + 1) / 2;
}

console.time("time");
addUpTo(TEST_VALUE);
console.timeEnd("time");
