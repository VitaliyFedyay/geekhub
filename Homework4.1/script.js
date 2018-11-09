const array = [8,2,4,9,1];

const myForEach = function(arr,callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

const myMap = function(arr,callback) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
};

const myFilter = function(arr,callback) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const mySort = function(arr, callback) {

  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      if(callback(arr[i], arr[j])) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr; 
}

const myPush = function(arr, item) {
  arr[arr.length] = item;
};

console.log('forEach');
myForEach(array, function(num, i, arr) {
  console.log('num = ' + num + ', i = ' + i + ',', arr)
});

console.log('myMap');
myMap(array, function(num, i, arr) {
  console.log('num = ' + num + ', i = ' + i + ',', arr)
});

console.log('myFilter');
const result = myFilter(array, function(num) {
  return num > 5;
});
console.log(result);

console.log('mySort');
const sort = mySort(array, function(a, b) {
  return a < b;
});
console.log(sort);

console.log('myPush');
myPush(array,12);
console.log(array);