//Write a function to calculate the sum of all numbers in an array.

//Method 1
function sumOfArrayElements(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

const arr = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]
const result = sumOfArrayElements(arr)
// Test case 1
console.log(result)

const result2 = sumOfArrayElements(arr2)
//Test case 2
console.log(result2)

//Method 2
function sumOfArrayElements2(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0)
}

const arr3 = [30, 40, 50, 60, 70]

const result3 = sumOfArrayElements2(arr3)

//Test case 3
console.log(result3)
