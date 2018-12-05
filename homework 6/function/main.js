let number;

function isPrime(number) {
  if(number%2 === 0) {
    return false
  }
  else if (number == 0 || number == 1) {
    return false
  }
  else {return true}
}

function factorial(number) {
  return (number != 1) ? number * factorial(number - 1) : 1
}

function fib(number) {
  if (number == 1 || number == 2) {
    return 1
  } else {
    return fib(number - 1) + fib(number - 2)
  }
}

function isSorted() {
  let str = prompt('enter number via comma', '')
  str = '[' + str + ']'
  let array = JSON.parse(str)
  function compareNumeric(a, b) {
    if (a > b) return 1
    if (a < b) return -1
  }
  if(array) {
    let check = array.sort(compareNumeric)
    if(JSON.stringify(check) === str) {
      return true
    } else {
      return false
    }
  }
}

function reverse(str) {
  let arr = str.split('')
  console.log(arr)
  let newString = []
  for(let i = arr.length - 1; i >= 0; i--) {
    newString += arr[i]
  }
  return newString
}

function indexOf(array,index) {
  for(let key in array) {
    if(array[key] == index) {
      console.log(key)
    }
  }
}

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }

