
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



const product=[
    {name:'laptop',
        price:500,
        iteam:2
        
    },
    {name:'tv',
        price:300,
        iteam:5
        
    },
    {name:'telephone',
        price:50,
        iteam:9
        
    }
    
]

const price=product.map(iteam=>({
      total:iteam.price*iteam.iteam,
      name:iteam.name
}))
console.log(price);


// filter method
 // this method is use to filter the value on the basis of condition
 // we can use it on array of object also
 const number1=[1,2,3,4,5,6,];

 const enennum=(number1.filter(even));
 function even(iteam){
    return iteam%2==0;
 }
 console.log(enennum)
 //more example
 const products=[
    {
    name:'laptop',
    price:34546,
    iteam:412
 },
    {
    name:'yd',
    price:34566,
    iteam:43
 },
    {
    name:'laptop',
    price:36446,
    iteam:42
 },
]

 const costofproduct=(products.filter(sumofproduct));

 function sumofproduct(iteam){
    return iteam.price>1000;
 }
 console.log(costofproduct);//print all the product whose price is greater than 1000

 