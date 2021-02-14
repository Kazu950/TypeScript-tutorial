// 非推奨
interface addFunc {
  (num1: number, num2: number): number;
}
// 推奨
// type addFunc = (num1: number, num2: number) => number

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Nameable {
  name: string;
}

interface Engineer {
  experience: number;
}

interface Human extends Nameable, Engineer {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human, Engineer {
  constructor(
    public name: string,
    public age: number,
    public experience: number
  ) {}
  greeting(message: string) {
    console.log("Hello!");
  }
}
const tempDeveloper = {
  name: "Quill",
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  },
};
const tmp: Human = tempDeveloper;
const user = new Developer("Quill", 38, 3);
