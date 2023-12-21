// variables

var a; //declara la variable a
var b = 'b'; // declara y asigna un valor a la variables
b = 'bb'; //reasigna la variable
var a = 'aaa'; //redeclara y asigna la variable

//global scope
var fruit = 'apple'; //es una variable global

console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; // si no se declara antes de ser inicializada, entonces se toma como global
    console.log(country);
}
countries();

console.log(country);