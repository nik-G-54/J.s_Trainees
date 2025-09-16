
// // let mod=document.querySelector('#cl');
// // let currentmod="light";


// // function check(){
// //     if(currentmod==="light"){
// //         currentmod="dark";
// //          document.querySelector("body").style.backgroundColor="black";
        
// //     }
// //     else{
// //         currentmod="light";
// //     document.querySelector("body").style.backgroundColor="white";
// // }
// //     console.log(currentmod);
// // }
// // mod.addEventListener('click',check)



// // function cartprice(...num1){
// //     return num1
// // }
// // console.log(cartprice(200,599,4022 ));// if we not  add (...) then this will giv only 1st 200 valaue ;

// const newArray=[200,40,567]
// function returnArrayvale(newArray){
//     return newArray[2];
    
// }
// //console.log(returnArrayvale(newArray))

// const user ={
// username : " nikhik",
// age : 45,
// welcome: function(){
//    // console.log("hxfyuiojl")
// }

// }
// user.welcome()
// //console.log(this)
// //...........use of arro function............
// const add = (num1 ,num2) =>{
//     return num1+num2;
// }
// //console.log(add(3,4))

// //..............2nd method ............
// const add2 = (num1,num2) => num1+num2;
// //console.log(add2(3,4));


// ///..........imidiate function ....
// (function immidiate(){
//    // console.log("syntex of immidiate function ()()")
// })();


// (() => {
//    // console.log("syntex of immidiate function ()() 2nd way")
// })();


// const user1 ={};
// if(Object.keys(user1).length===0){
//    // console.log("this is empty object and key return a aaray")
// }
// //...........MAP/............ is me unique value hi wapas krta h 
// const map = new Map()
// map.set('IN',"india")
// map.set('US',"united statre of america")
// map.set( 'fr'," france")
// map.set('IN',"india")
// //console.log(map);

// for(const useofkey of map){
//    // console.log(useofkey)
// }

// // ..for of loop not work for {object}.....


// //....for in loop //////......
// const object={
//     in:"india ",
//     us:"united state of america",
//     ln:" language",
// }
 
// for(const keys in object){
//    // console.log(`${keys}`,"  object ke andar ka ",  `${object[keys]}`)
// }



// const coding=["java","c++","python","JS"]
// //coding.forEach( function (val) {
// //    console.log(val)

// coding.forEach(  (iteam)=> {
//     console.log(iteam);
// })
  

/// how to print different type of date format e

let currentdte= new Date();
console.log(currentdte);
console.log(currentdte.toDateString());
console.log(currentdte.toString());
console.log(currentdte.toJSON());
console.log(currentdte.toLocaleString());

// to declare now date
let nowdate= Date.now();
console.log(nowdate);

// how to convert string to number
let num="44";
let num1="hdsf4546";
console.log(typeof num);
console.log(num)
let type=Number(num)  // by add Number it can change the string to num
console.log(typeof type);
console.log(Number(num1));
console.log(typeof num1);

    //but if we want to convert ("354vcnv")this type of data to Number then it give NaN.....



    //Array operation 
    let arr=[1,2,3,4,5];
    arr.push(6)// this push add the element in the last 
    console.log(arr);
    arr.pop(6);// tthis will remove the element from last 
    console.log(arr);

    // concat == it add two string and return a new string so it will store in new string 

    // spread == 
    let numb=[1,2,3,4,,45,7];
    let st=["SFDD","dovsdkv","joskdv"];
    // to join two array 
    const combination =[...numb,...st];
    console.log(combination);


    // difference between foreach loop and filter is---- for each loop does not return the any value 
    // while filter requir a return statment and also reqrie a condition ...
    // syntext filter((num)=>{
      //     return num>5}) .... inside the  bracket ther is a num we can take any variable in place of num 
      let numbers=[1,2,3,4,5,6,7,8,9]
      const newnum=numbers.filter((num)=>{
         return num>4;
      })
      console.log(newnum);


      // similar like (for each) there is an another method call map ()this will also a call back function which return the values 
      let arr2= [1,2,3,4,5,6,7,8,9]
      arr2=arr2.map((nu)=>{
         return nu+10;
      })
      console.log(arr2);
//

//  settimeout function .......
      const settime=setTimeout(function(){
         document.querySelector('#title').innerHTML="change the tex"
      },3000);
      console.log(settime);
  
      // by using this cleartimeout function we can stopped any function jispe settimeout function lga hua h 
/// systex of cleartimeout ---document.
// ('button').addeventlistner('click",function(){cleartimeout(gave the function of settimreout)})
       document.querySelector('#cl').addEventListener( 'click',function(){
            clearTimeout(settime)
console.log("stooped")
       })