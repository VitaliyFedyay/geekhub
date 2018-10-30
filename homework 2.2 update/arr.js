var arr = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var globalMax, globalMin, globalSum, globalSwap;

var max = arr[0];
arr.forEach( function(elem, i, arr) {
	if (arr[i] > max) {max = arr[i]};	
	globalMax = max;
});	
console.log("Max value: ", globalMax);	

var min = arr[0];
arr.forEach( function(elem, i, arr) {
	if (min > arr[i]) {min = arr[i]};
	globalMin = min;
});
console.log("Min value: ", globalMin);

var resultSum = 0;
arr.forEach( function(elem, i, arr) {
	resultSum += arr[i];
	globalSum = resultSum;
});
console.log("Sum : ", globalSum);

function swapMinMax(arr) {
	function replaceMinMax(arr) {
		var imax = 0;
		var imin = 0;
		var min = arr[0];
		var max = arr[0];
		arr.forEach( function(elem, i, arr) {
			if (min > arr[i]) {
				min = arr[i];
				imin = i;
			} else if (max < arr[i]) {
				max = arr[i];
				imax = i;
			} 
		});
		console.log("before swap: ", arr);
		arr[imin] = max;
		arr[imax] = min;
		console.log("swap min" + "[" + imin + "]" + ":" + arr[imin]);
		console.log("swap max" + "[" + imax +"]"+ ":" + arr[imax]);
		return arr;
	}	
		replaceMinMax(arr);
		console.log(arr);
		globalSwap = arr;
};

function callBackFunc(massive, callback) {
	console.log("reading mass arr:" + arr + " in callback func");
	callback();
};

function massInObj(arr) {
	var object = {};
	arr.forEach( function(elem, i, arr) {
	object[i] = arr[i];
	});
	console.log("Mass in obj:",object);
};
	
swapMinMax(arr);
massInObj(arr);

callBackFunc(arr, function() {
	console.log("reading is finished");
});

var obj = {
	 minValue: globalMin,
	 maxValue: globalMax,
	 sumMass: globalSum,
	 replaceValueMass: globalSwap
	 };
console.log("this is all version in obj", obj);
