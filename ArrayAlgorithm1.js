//this code create an array of any size; 
//then multiply each value in that array by its array position
//the updated array is then printed out 
var testArray=[6,3,5,1,2,4];
var updatedArray=[];
for(var i=0;i<testArray.length;i++){
  updatedArray[i]=testArray[i]*i;
}
console.log(updatedArray);