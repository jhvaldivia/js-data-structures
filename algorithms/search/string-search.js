/**
 * The stringSearch method returns how many times a given string is in another string.
 * (Naive implementation)
 * Time complexity O(n^2)
 * @param  {String} word  Base string to compare against.
 * @param  {String} value String to locate in the word.
 * @return {Number}       Number of times the value is in the word
 */
function stringSearch(word, value) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (value[j] !== word[i+j]) break;
      if (j === value.length - 1) count++;
    }
  }

  return count;
}

const result = stringSearch("example string", "str");
console.log(`Result is: ${result}`);
