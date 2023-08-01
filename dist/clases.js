export class User {
    email;
    userName;
    age;
    static brand = 'ISDI';
    constructor(email, userName, age) {
        this.email = email;
        this.userName = userName;
        this.age = age;
    }
    greetings(name) {
        console.log(`Hola soy ${this.userName}, bienvenid@ ${name}`);
    }
}
export class Alumno extends User {
    course;
    constructor(email, userName, age, course) {
        super(email, userName, age);
        this.course = course;
    }
    greetings(name) {
        super.greetings(name);
        console.log(`Estudio ${this.course}`);
    }
}
