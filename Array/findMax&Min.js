// Find the largest and smallest numbers in an array.

function findMaxAndMin(arr) {
  let max = arr[0]
  let min = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      console.log(i)
      min = arr[i]
    }
  }
  return [max, min]
}

const arr = [15, 50, 20, 30, 40, 10]
const result = findMaxAndMin(arr)
console.log(result)

// Method 2

function findMaxAndMin2(arr) {
  return [Math.max(...arr), Math.min(...arr)]
}

const arr2 = [15, 50, 20, 30, 40, 10]
const result2 = findMaxAndMin2(arr2)
console.log(result2)
