//Get the sum of all even numbers between 2 numbers(a starting & ending number)
function sumOfEven(startingNum, endingNum){
    var sum=0;
    for(var i=startingNum;i<=endingNum;i++){
      if(i%2===0){
        sum+=i;
      }
    }
    return sum;
  }
  var result=sumOfEven(1,1500);
  var result1=sumOfEven(2,400);
  console.log(result);
  console.log(result1);

  //take a starting and ending number & return an array of all numbers between those 2
  var returnArray=[];
function createArray(start, end){
  for(var i=start;i<=end;i++){
    returnArray.push(i);
  }
  return returnArray;
}
var answer=createArray(1,250);
console.log(answer);

//Get the sum of all odd numbers between 2 numbers(a starting & ending number)
function sumOfOdd(begining, theEnd){
    var oddSum=0;
    for(var i=begining;i<=theEnd;i++){
      if(i%2!==0){
        oddSum+=i;
      }
    }
    return oddSum;
  }
  var FinalResult=sumOfOdd(1,1500);
  console.log(FinalResult);

  //