// splice-> change the existing array
//       ->can be used to add new elements to array -> (position, no. of elements to add, elements to be added)

let numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.splice(1,3))
console.log(numbers)

console.log(numbers.splice(1,2, 444, 56))
console.log(numbers)