const TEST_VALUE_1 = 'anagram';
const TEST_VALUE_2 = 'nagaram';

function validAnagram(word1, word2) {
  if (word1.length === 0 && word2.length === 0) {
    return true;
  }

  if (word1.length !== word2.length) {
    return false;
  }

  let fc1 = {};
  for (let c of word1) {
    fc1[c] = (fc1[c] || 0) + 1;
  }

  for (let c of word2) {
    if (!fc1[c]) { // when the value of fc1[key] is 0 is falsy
      return false;
    } else {
      fc1[c] -= 1;
    }
  }

  return true;
}

const result = validAnagram(TEST_VALUE_1, TEST_VALUE_2);
console.log(`Is ${TEST_VALUE_2} an anagram of ${TEST_VALUE_1}?`, result);