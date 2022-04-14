function  newFunction(name, age, country) {
    var name = name || 'goyo';
    var age = age || 29;
    var country = country || 'EZL';
    console.log(name, age, country);
}

//es6

function newFunction2(name = 'goyo', age = 29, country = 'EZL') {
    console.log(name, age, country);
}

newFunction2(); // llamado sin elementos
newFunction2('Ricardo', '23', 'COL');

//template literals

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`; //usando es6
console.log(epicPhrase2);

//clase 2

let lorem = "texto de prueba para programar y separarla \n"
 + "otra frase epica que vamos a separar.";


 //usando es6

 let lorem2 = `otra frase epica que necesitamos separar
 ahora es otra frase epica`;

 console.log(lorem);
 console.log(lorem2);

 //

 let person = {
     'name': 'goyo',
     'age': 32,
     'country': 'COL'
 }

 console.log(person.name, person.age);

 let { name, age, country} = person;
 console.log(name,age,country);

 //propagacion

 let team1 = ['Goyo', 'Ricardo', 'Raul'];
 let team2 = ['Laura', 'Yesica', 'Paola'];

 let education = ['David', ...team1, ...team2];
 console.log(education);

 // let es una nueva forma de trabajar con elementos a guardar en memoria (variables)

 {
     var globalVar = "Global var";
 }

 {
    let globalLet = "Global Let";
}

console.log(globalVar);
console.log(globalLet);