const data = {
    frontend: 'goyo',
    backend: 'ana',
    design: 'juan'
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

// object values

const data = {
    frontend: 'goyo',
    backend: 'ana',
    design: 'juan'
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

//pading

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '-----'))

console.log('food'.padEnd(12, '----'))

//async await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
         ? setTimeout(() => resolve('Hello World'), 3000)
         : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }    
};

anotherFunction();
