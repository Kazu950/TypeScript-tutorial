// 変数に対してマウスオーバーすることで型が確認できる（VSCodeにtscが内蔵されているため）
// 型の記述方法
const hasValue: boolean = true;

const count: number = 10;
const float: number = 3.14;
const negative: number = -0.12;

const single: string = "hello";
const double: string = "hello TS";
const back: string = `hello TypeScript`;

// 型注釈と型推論
// 型注釈は上記の変数群
// 型推論（基本的には型推論を使う）
const value = true;

const string = "string";

const number = 30;

// オブジェクト
const person: {
  name: string;
  age: number;
} = {
  // 上記の指定したものがかけている状態だとエラー
  name: "Jack",
  age: 21,
};

const people = {
  name: {
    first: "Jack",
    last: "Smith",
  },
  age: 21,
};

// 配列
const fruits: string[] = ["Apple", "Banana", "Grape"];
const mix: any[] = ["Apple", "Jack", 20];

// Tuple型（決まった内容の配列を作成するときなどに使用, 配列よりもより厳しい制約）
// 決まった内容の配列の例：const book = ['business', 1500, false];
const book: [string, number, boolean] = ["business", 1500, false];
const mobile: [boolean, string, number] = [true, "phone", 10000];

// Enum（列挙型：特定のまとまったグループのみを受け入れる型）
enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

// enumでイコールを付けない場合
enum ClothesSize {
  S,
  M,
  L,
}
const clothes = {
  gender: "man",
  size: ClothesSize.L,
};
console.log(ClothesSize.L); // 2

// any型（どんな型でも入る, JSに戻るイメージ, anyはなるべく使わない）
let anything: any = true;
anything = "hello";
anything = ["hello", 3, false];
anything = {};
anything.hoge = "hoge";

let anythingArray: any[] = [true, 3, "hello"];

// ユニオン型（複数の型の受け入れが可能）
let unionType: number | string = 10;
unionType = "hello";

let unionTypeArray: (number | string)[] = [21, "hello"];

// リテラル型（完全に決まった値しか入れられなくなる）
// appleしか入れれなくなる
const apple: "apple" = "apple";
const example: true = true;
const example2: false = false;

// constで値をしてすると自動でリテラル型になる
const banana = "banana";

// letの場合にはString型になる
let grape = "grape";

// ユニオン型＋リテラル型
// 指定した三つの値しか入れれない
// sizeはリテラルになっている（cloth.size = largeができない）
let clothSize: "small" | "medium" | "large" = "small";
const cloth = {
  color: "white",
  size: clothSize,
};

// タイプエイリアス（型を変数のように扱うことができる, 型に別名を与えて使う）
type Color = "red" | "green" | "blue";
const colorVariation: Color = "red";

// 関数に型付け（パラメータと戻り値に型をつける）
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// 型推論の場合
// 戻り値は推論するがパラメータに関しては指定がないとany型になる
function sub(num1, num2) {
  return num1 + num2;
}

// void型（戻り値がない場合）
function sayHello(): void {
  console.log("Hello!");
}

// 関数を保持する変数に対しての型付け
// 関数の型注釈は戻り値の指定をする際に矢印になる
const anotherAdd: (num1: number, num2: number) => number = add;
const multipliction: (n1: number, n2: number) => number = function (
  num1: number,
  num2: number
): number {
  return num1 * num2;
};

const multipliction2 = function (num1: number, num2: number): number {
  return num1 * num2;
};

const multipliction3: (n1: number, n2: number) => number = function (
  num1,
  num2
) {
  return num1 * num2;
};

// アロー関数における型宣言
const doubleNumber = (number: number): number => number * 2;
const doubleNumber2: (num: number) => number = (num) => num * 2;

// コールバック関数に対する型付け
function doubleAndHandle(num: number, callback: (num: number) => number): void {
  const doubleNum = callback(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

// unknown型（anyより少し厳しめ）
let unknownInput: unknown;
let anyInput: any;
let text: string, text2: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
// 以下のコードはunknownはNG
//text = unknownInput;
// 上記のようにするにはifを使って型を保証してやる必要がある
if (typeof unknownInput === "string") {
  text = unknownInput;
}

anyInput = "hello";
anyInput = 21;
anyInput = true;
// anyだとOK
text2 = anyInput;

// never型（何も返さない）
// 以下の関数は何も返さない（undefinedすら返さない）
function error(message: string): never {
  throw new Error(message);
}
console.log(error("This is an error"));
