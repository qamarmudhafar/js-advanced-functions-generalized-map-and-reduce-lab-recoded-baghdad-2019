// Add your functions here
let map= function(arr,callback){
  let newarr=[];
  for (let i=0;i<arr.length;i++){
    newarr.push(callback(arr[i]));
  }
  return newarr;
}


let reduce = function(arr,callback,startpoint=0){
  let tem;
  if(startpoint){
    tem=startpoint
  }
  else
  {tem=arr[0]}
  let i;
  if(startpoint){
    i=0;
  }
  else{
    i=1;
  }
  for(;i<arr.length;i++){
    tem=callback(tem,arr[i])
  }
  return tem;
}