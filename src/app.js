/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(n) {
  //Your code here
  if(n === 1){
    return 1
  }else{
    return n * findFactorial(n-1)
  }
}
console.log(findFactorial(6));

//Exercise 2
const reverseString = function(str) {
  //Your code here
  if(str.length === 1){
    return str
  }else{
    return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1))
  }
}
console.log(reverseString('something'));

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  //Your code here
  if(arr1.length === 0){return }
  arr2.push(arr1.splice(0,1)[0])
  swap(arr1, arr2)
}
swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }