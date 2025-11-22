const person={
    Firstname:'Nikhil',
    Lastname:'gupta',
    age:21,
    fullnname:function(){
        return this.Firstname+""+this.Lastname;
    }
}

console.log(person);
// now if we want to add extra property inside this object then 
person.email='nikh543232@gmail.com';
 console.log(person);

 // 2nd method to add value
 
 person['mobile']=122345 
  console.log(person['mobile']); // here we use direct key value because at upper we cannot define any varible with the name mobile  

 const mobile='mobile'
 console.log(person[mobile]); // her this mobile is act as a variable we can use any value in place of mobile 


 // use for in loop 
 for(const x in person){
    console.log(x);// this only give the key 
 }


// if we want value also then we use this 
for(const x in person){
    console.log(person[x]);// this only give the key 
 }

 console.log(person.fullnname());

 // constructed function 

 function Person(fname,lname,age,em){
    this.Firstname=fname;
    this.Lastname=lname;
    this.age=age;
    this.email=em;
 }

 // now add different different person detail in a single line 
 const NikDetail= new Person('nikhil','gupta',21,"nsbdbsad@gmail.com");
 console.log(NikDetail);