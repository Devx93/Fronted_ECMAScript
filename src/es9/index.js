const obj = {
    name: 'goyo',
    age: 29,
    country: 'COL'
};

let {name, ...all } = obj;
console.log(name, all);

let {country, ...all } = obj;
console.log(all);

const obj = {
    name: 'goyo',
    age: 29,
};

const obj2 = {
    ...obj,
    country: 'COL'
};

console.log(obj2);

//

const helloWorld = () => {
return new Promise((resolve, reject) => {
    (true)
     ? resolve('Hello World')
     : reject(new Error('Test Error'))
});
};

helloWorld()
 .then(response => console.log(response))
 .catch(error => console.log(error))
 .finally(() => console.log('FInalizo'))


 const regexData = /([0-9]{4})-([0-9]{2})-([0-90]{2})/
 const match = regexData.exec('2022-04-15');
 const year = match[1]
 const month = match[2]
 const day = match[3]

 console.log(year, month, day);