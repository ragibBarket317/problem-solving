// Remove duplicate elements from an array.

// Method 1
function removeDuplicate(arr) {
  return Array.from(new Set(arr))
}

const arr = [1, 2, 2, 3, 4, 4, 5]
const result = removeDuplicate(arr)
console.log(result)

// Method 2
function removeDuplicate2(arr) {
  return [...new Set(arr)]
}

const arr2 = [1, 2, 2, 3, 4, 4, 5]
const result2 = removeDuplicate2(arr2)
console.log(result2)

// Method 3
function removeDuplicate3(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

const arr3 = [1, 2, 2, 3, 4, 4, 5]
const result3 = removeDuplicate3(arr3)
console.log(result3)

// Method 4
const arr4 = [1, 2, 2, 3, 4, 4, 5]
const uniqueArray = arr4.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr)
  }
  return acc
}, [])

console.log(uniqueArray)
