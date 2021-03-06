function matrix(R, C, r0, c0) {
  let n = Math.max(r0, c0, R-1-r0, C-1-c0);
  let start = [[r0,c0]];
  for(let i=1; i<=n; i++){
    for(let j=1-i; j<=i; j++) start.push([r0+j,c0+i]); 
    for(let j=i-1; j>=-i; j--) start.push([r0+i,c0+j]); 
    for(let j=i-1; j>=-i; j--) start.push([r0+j,c0-i]); 
    for(let j=1-i; j<=i; j++) start.push([r0-i,c0+j]); 
  }
  console.log(start.filter(x=>x[0]>=0&&x[0]<R&&x[1]>=0&&x[1]<C));
};
matrix();