var arr = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var arr1 = [-1,-8,-2];
var arr2 = [1,7,3];
var arr3 = [1,undefined,3,5,-3];
var arr4 = [1,NaN,3,5,-3];

var globalMin; 
var globalMax;
var globalSum;
var globalSwap;

//max value
	function maxValueMass(arr) {
		var max = arr[0];
		for (i = 0; i < arr.length; i++) {	
			if (max < arr[i]) max = arr[i];
		}
		globalMax = max;
		console.log("Max value: ",max);
	}
//min value
	function minValueMass(arr) {
		var min = arr[0];
		for (i = 0; i < arr.length; i++) {
			if (min > arr[i]) min = arr[i];
		}
		globalMin = min;
		console.log("Min value: ",min);
	}
//sum of mass
	function sumMass(arr) {
		var resultSum = 0;
		for (i = 0; i < arr.length; i++) {
			resultSum += arr[i];
		}
		globalSum = resultSum;
		console.log("Sum : ",resultSum);
	}
//replace min and max value of mass
	function swapMinMax(arr) {
		function replaceMinMax(arr) {
			var imax = 0;
			var imin = 0;
			var min = arr[0];
			var max = arr[0];
			for (i = 0; i < arr.length; i++) {
				if (min > arr[i]) {
					min = arr[i];
					imin = i;
				}
				else if (max < arr[i]) {
					max = arr[i];
					imax = i;
				} 
			}
			console.log("before swap: ",arr);
			arr[imin] = max;
			arr[imax] = min;
			console.log("swap min" + "[" + imin + "]" + ":" + arr[imin]);
			console.log("swap max" + "[" + imax +"]"+ ":" + arr[imax]);
			return arr;
		}	
			replaceMinMax(arr);
			console.log(arr);
			globalSwap = arr;
	}
//func with callback
	function callBackFunc(massive,callback){
		console.log("reading mass arr:" + arr + " in callback func");
		callback();
	}
//func for return mass in object
	function massInObj(arr) {
		var object = {};
	for (var i = 0; i < arr.length; i++) {
		object[i] = arr[i];
		}
		console.log("Mass in obj:",object);
	}
	maxValueMass(arr);
	minValueMass(arr);
	sumMass(arr);
	swapMinMax(arr);
	massInObj(arr);
	callBackFunc(arr,function() {
		console.log("reading is finished")
	});
var obj = {
	 	minValue:globalMin,
	 	maxValue:globalMax,
	 	sumMass:globalSum,
	 	replaceValueMass:globalSwap
	 };
	 console.log("this is all version in obj",obj);
