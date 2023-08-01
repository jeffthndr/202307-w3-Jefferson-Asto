/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
export class Pet {
    name;
    breed;
    // Atajo name
    // breed
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        // Atajo this.name = name
        // this.breed = breed
    }
}
const pet1 = new Pet('pepe', 'perro');
let pet2;
pet2 = { name: 'fu', breed: 'dragon' };
let pet3;
pet3 = { name: 'fu', breed: 'dragon' };
let pet4;
pet4 = { name: 'fu', breed: 'dragon' };
class Dog {
    name;
    breed;
    constructor(name) {
        this.name = name;
        this.breed = 'Dog';
    }
}
class Cat {
    name;
    breed;
    constructor(name) {
        this.name = name;
        this.breed = 'Cat';
    }
}
