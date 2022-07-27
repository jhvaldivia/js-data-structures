function binarySearch(array, value){
  let min = 0;
  let max = array.length - 1;
  
  while (min <= max) {
    const middle = Math.ceil((max+min)/2);
    const middleValue = array[middle];

    if (middleValue === value) return middle;

    if (middleValue < value) {
      min = middle + 1;
    } else {
      max = middle - 1;      
    }
  }
  
  return -1;
}

const result = binarySearch([1,2,3,4,5], 4);
console.log(`Result is: ${result}`);
