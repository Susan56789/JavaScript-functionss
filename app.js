function greeting(){
    let message='Hello';
    let sayHi = function hi(){
let message = 'Hi';
    };
    console.log(message);
}
greeting();

//Immediately Invoked Function Expression (IIFE)
(function (){
    console.log('Hi there!');
})();

/*
Closure - gives you access to an outer function's scope from
an inner function
*/
let wave =(function(){
 let message ='Good morning';
 let getMessage = function(){
     return message;
 } ;
 //closure
 return{
     getMessage: getMessage,
 };
})();
console.log(wave.getMessage());