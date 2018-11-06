let arr = [];
function waterAmountLevel(arr) {
  let waterAmount = 0;
  let leftMax;

  arr.forEach(function (elem,i,arr) {

    let leftMax = arr.reduceRight(function(accumulate,current,i,arr) {
      return Math.max(accumulate, arr[i]);
    },0);

    let rightMax = 0;
    arr.forEach(function(elem,i,arr) {
      rightMax = Math.max(rightMax,arr[i]);
    });

    let minimalLevel = Math.min(leftMax,rightMax);
    if(minimalLevel > arr[i]) {
      waterAmount += Math.min(leftMax,rightMax) - arr[i];
    } 
  });
  return  waterAmount;
}
waterAmountLevel(arr);
