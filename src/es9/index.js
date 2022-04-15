const obj = {
    name: 'goyo',
    age: 29,
    country: 'COL'
};

let {name, ...all } = obj;
console.log(name, all);

let {country, ...all } = obj;
console.log(all);