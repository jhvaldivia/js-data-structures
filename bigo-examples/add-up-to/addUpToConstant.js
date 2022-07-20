// O(1) time will remain the same regardless of N
const TEST_VALUE = 2000000;

function addUpToConstant(n) {
  return n * (n + 1) / 2;
}

console.time("time");
addUpToConstant(TEST_VALUE);
console.timeEnd("time");
