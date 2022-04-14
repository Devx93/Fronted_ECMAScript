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
