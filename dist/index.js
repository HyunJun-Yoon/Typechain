"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class
class Alien {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Alien('ET', 122, 'male');
const sayHello = (alien) => {
    return `Hello ${alien.name}, you are ${alien.age}, you are a ${alien.gender}`;
};
console.log(sayHello(lynn));
const person = {
    name: 'Hyunjun',
    age: 26,
    gender: 'male'
};
const sayHi1 = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi1(person));
// function
const sayHi = (name, age, gender) => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};
console.log(sayHi('Jun', 12, 'male'));
//# sourceMappingURL=index.js.map