abstract class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  protected age: number;
  constructor(public readonly name: string, initAge: number) {
    this.age = initAge;
  }

  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;
  get subject() {
    if (!this._subject) {
      throw new Error("There is no subject.");
    }
    return this._subject;
  }
  set subject(value) {
    this._subject = value;
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  explainJob() {
    console.log(`I am a teacher and I teach ${this.subject}`);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Quill", 38, "Math");
    return Teacher.instance;
  }
}

const teacher = Teacher.getInstance();
teacher.greeting();
