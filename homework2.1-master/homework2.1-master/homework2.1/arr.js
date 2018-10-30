let arr = [2, 2, 1, 2, 2] // 1
let len = arr.length;

function waterAmountLevel(arr) {
	let waterAmount = 0;

for (let i = 0; i < len; i++) {

	let leftMax = 0;
	for(let leftIndex = i-1; leftIndex >= 0; leftIndex-- ) {
		leftMax = Math.max(leftMax, arr[leftIndex]);
	}

	let rightMax = 0;
	for (let rightIndex = i+1; rightIndex < len; rightIndex++ ) {
		rightMax = Math.max(rightMax,arr[rightIndex]);
	}

	let minimalLevel = Math.min(leftMax,rightMax);

	if(minimalLevel > arr[i]) {
		waterAmount += Math.min(leftMax,rightMax) - arr[i];
			}	
		}
		console.log(arr);
		console.log('solution: ',waterAmount);
	return	waterAmount;
	
}
waterAmountLevel(arr);





