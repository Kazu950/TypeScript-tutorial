"use strict";
class Person {
    constructor(name, initAge) {
        this.name = name;
        this.age = initAge;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = "Homo sapiens";
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error("There is no subject.");
        }
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("Quill", 38, "Math");
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
teacher.greeting();
