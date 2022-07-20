// O(N) time will grow proportionally to N
const TEST_VALUE = 2000000;

function addUpToN(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

console.time("time");
addUpToN(TEST_VALUE);
console.timeEnd("time");
