let sayHi = function greet(message, ...name){
    console.log(message + 'everyone!');
    name.forEach(name => console.log('Hi '+ name));

}
sayHi('Welcome ', 'Sue', 'John','James');

/*
Rest parameter allows a function to accept an indefinite number of arguments 
as an array
*/