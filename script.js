function threeSum(arr, target) {
	let arr2=[];
	let m=0;
	let diff=Number.MAX_VALUE;
  for(let i=0;i<arr.length-2;i++){
	  for(let j=i+1;j<arr.length-1;j++){
		  for(let k=j+1;j<arr.length;k++){
			  var sum=arr[i]+arr[j]+arr[k];
			  arr2[m]=sum;
			  m++;
		  }
	  }
  }
  for(let s=0;s<arr2.length;s++){
	  if(arr2[s]< diff){
		  diff=arr2[s];
	  }
  }
	return diff;
}
let target=prompt("target");
let n =prompt("n");
let arr=prompt("enter no of elements");
let t=threeSum();
console.log(t);
