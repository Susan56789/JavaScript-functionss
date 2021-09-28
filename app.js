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

/*
Arrow functions - allows you to create functions in a cleaner way
compared to regular functions
Arrow functions do not have their own THIS value
*/
let wavy = () => {
    return 'Have a lovely day';
}
let saying = wavy();
console.log(saying);

//THIS 
let text = {
    name:'Susan',
    regularFunction: function(){
        console.log(this)
        console.log('Hello ' + this.name);
    },
    arrowFunction : () => console.log('Hi ' + this.name) // thi.name will be undefined
}
text.regularFunction();
text.arrowFunction();

// call() method