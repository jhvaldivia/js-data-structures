// O(N) time will grow proportionally to N
const TEST_VALUE_1 = [1,2,3,2,5];
const TEST_VALUE_2 = [9,1,4,4,25];

function isQuadraticEquivalent(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let fc1 = {};
  let fc2 = {};
  for (let val of array1) {
    fc1[val] = (fc1[val] || 0) + 1;
  }
  for (let val of array2) {
    fc2[val] = (fc2[val] || 0) + 1;
  }

  for (let key in fc1) {
    if (!(key ** 2 in fc2)) {
      return false;
    }
    if (fc2[key ** 2] !== fc1[key]) {
      return false;
    }
  }

  return true;
}

const result = isQuadraticEquivalent(TEST_VALUE_1, TEST_VALUE_2);
console.log('Is one array the quadratic equivalent of the other?', result);