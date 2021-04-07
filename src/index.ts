// Class
class Alien {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Alien('ET', 122, 'male');

const sayHello = (alien: Alien): string => {
  return `Hello ${alien.name}, you are ${alien.age}, you are a ${alien.gender}`;
};
console.log(sayHello(lynn));

// Interface
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'Hyunjun',
  age: 26,
  gender: 'male'
};

const sayHi1 = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi1(person));

export {};

// function
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi('Jun', 12, 'male'));
