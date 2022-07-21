const TEST_VALUE = 'Test function 123!!';
const TIME_TAG = 'time';

function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      const lchar = char.toLowerCase();
      obj[lchar] = ++obj[lchar] || 1;
    }
  }

  return obj;
}

function isAlphaNumeric(str) {
  let code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

console.time(TIME_TAG);
const result = charCount(TEST_VALUE);
console.log(`Result: ${JSON.stringify(result)}`);
console.timeEnd(TIME_TAG);
