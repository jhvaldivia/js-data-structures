/**
 * The bubbleSort method will return the same array of numbers but sorted in ascending order.
 * Time complexity O(n^2)
 * @param  {Number[]} array Array of elements (numbers).
 * @return {Number[]}       Sorted array in ascending order.
 */
 function bubbleSort(array){
  function swapElements(_arr, i, j) {
    let temp = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = temp;
  }

  let swapped;
  for (let i = array.length; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j+1]) {
        swapElements(array, j, j+1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return array;
}

const result = bubbleSort([10,4,1,90,88]);
console.log(`Result is: ${result}`);
