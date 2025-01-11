//Reverse the elements of an array without using reverse()

function reverseArray(arr) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    // Swap elements
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    // Move pointers
    start++
    end--
  }

  return arr
}

// Test with unsorted data
const unsortedArray = [1, 2, 3, 4, 5]
console.log(reverseArray(unsortedArray))
