const array = [8,2,4,9,1];

Array.prototype.myForEach = function(func) {
  for(var i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
};

Array.prototype.myMap = function(func) {
  var newArr = [];
  for(var i = 0; i < this.length; i++) {
    newArr.push(func(this[i], i, this));
  }
  return newArr;
};

Array.prototype.mySort = function(func) {

  for(var i = 0; i < this.length; i++) {
    for(var j = i; j < this.length; j++) {
      if(func(this[i], this[j])) {
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this; 
}

Array.prototype.myFilter = function(func) {
  var newArr = [];
  for(var i = 0; i < this.length; i++) {
    if(func(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};


Array.prototype.myPush = function(num) {
  for (i = 0; i < arguments.length; i++) {
  this[this.length] = arguments[i];
  }
};


console.log('forEach');
array.myForEach(function(num, i, arr) {
  console.log('num = ' + num + ', i = ' + i + ',', arr)
});

console.log('myMap');
array.myMap(function(num, i, arr) {
  console.log('num = ' + num + ', i = ' + i + ',', arr)
});

console.log('mySort');
const sort = array.mySort(function(a, b) {
  return a < b;
});
console.log(sort);

console.log('myFilter');
const result = array.myFilter(function(num) {
  return num > 3;
});
console.log(result);

console.log('myPush');
array.myPush(12);
console.log(array);