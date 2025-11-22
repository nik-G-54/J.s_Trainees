
/// this is forEach loop in which three parameret are pass  {iteam ,index,array }

// we can pass any one or both or threee as we require 
const number=[1,2,3,4,5];

number.forEach((value ,index,array)=>{
    console.log('a['+index+']'+'='+value);
    console.log(array)
});
let sum=0;
number.forEach((value)=>{
sum+=value;

})

console.log(sum);


// if we apply directly on a const then this will return the same value not any type of function perform on it 


number.map(double);
function double(iteam){
return iteam*2;

}
console.log(number);
// nothing is to change 

// for multiplying the value we should create a new object 
const numberDouble=number.map(double);
number.map(double);
function double(iteam){
return iteam*2;

}
console.log(number);

const letter =['a','a','b','c','d','d'];

const count={};
 letter.forEach(iteam=>{
    
    console.log(iteam)

})

// we can use callback function like this way 

number.forEach(countiteam);

function countiteam(iteam,index,arr){
console.log(iteam);
console.log(index);
console.log(arr);
}



