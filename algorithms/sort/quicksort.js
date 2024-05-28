// time: O(n log n)

const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quicksort(less), pivot, ...quicksort(greater)];
};

const sorted = quicksort([10, 5, 2, 3]);
console.log(sorted);
