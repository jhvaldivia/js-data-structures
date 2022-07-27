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

const result = stringSearch("lorie loled", "lo");
console.log(`Result is: ${result}`);
