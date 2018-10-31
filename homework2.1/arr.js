let arr = [];
function waterAmountLevel(arr) {
	let waterAmount = 0;

	for (let i = 0; i < arr.length; i++) {

		let leftMax = 0;
		for(let leftIndex = i-1; leftIndex >= 0; leftIndex-- ) {
			leftMax = Math.max(leftMax, arr[leftIndex]);
		}

		let rightMax = 0;
		for (let rightIndex = i+1; rightIndex < arr.length; rightIndex++ ) {
			rightMax = Math.max(rightMax,arr[rightIndex]);
		}

		let minimalLevel = Math.min(leftMax,rightMax);

		if(minimalLevel > arr[i]) {
			waterAmount += Math.min(leftMax,rightMax) - arr[i];
		}	
	}
	return	waterAmount;
}
waterAmountLevel(arr);





