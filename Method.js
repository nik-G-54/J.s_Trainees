
// assign method == 
const person={
    firstname:"nikhil",
    lastname:'gupta',
    age:'t6tw'
}
const p2={
    firstname:'np',
    email:'bfuhs@gmail.com'
};

Object.assign(person,p2);
console.log(person);

const mykey= Object.entries(person);

// this is for in method 
console.log(mykey);
for(const x in mykey){
    console.log(mykey[x][0]);
}

// this is for of method 

for(const [x,y] of mykey){
    console.log(x,y);
}
// 


// preventExtension this is the method to prevent add new item in the object 


const p1={
    firstname:"nikhil",
    lastname:'gupta',
    age:'t6tw'
}

//Object.preventExtensions(p1);
p1.mob='jk3456789'; // this new iteam is not added 
p1.firstname='djsjdbf';// but modification is valid 
// in this delet poperation is working 

console.log(p1);

// seal 
// this method protect both delet and add event or value 
//Object.seal(p1);
delete person.firstname;

console.log(p1);


//Object.freeze(p1);
console.log(Object.isFrozen(p1));// this will only check that freez is applied or not 




Object.defineProperty(p1,"dob",{value:1234423,
    writable:false,
    enumerable:false,
    configurable:false,
});
console.log(p1)  // if we apply true then we modified it 