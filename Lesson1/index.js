// 変数に対してマウスオーバーすることで型が確認できる（VSCodeにtscが内蔵されているため）
// 型の記述方法
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello TS";
var back = "hello TypeScript";
// 型注釈と型推論
// 型注釈は上記の変数群
// 型推論（基本的には型推論を使う）
var value = true;
var string = "string";
var number = 30;
// オブジェクト
var person = {
    // 上記の指定したものがかけている状態だとエラー
    name: "Jack",
    age: 21
};
var people = {
    name: {
        first: "Jack",
        last: "Smith"
    },
    age: 21
};
// 配列
var fruits = ["Apple", "Banana", "Grape"];
var mix = ["Apple", "Jack", 20];
// Tuple型（決まった内容の配列を作成するときなどに使用, 配列よりもより厳しい制約）
// 決まった内容の配列の例：const book = ['business', 1500, false];
var book = ["business", 1500, false];
var mobile = [true, "phone", 10000];
// Enum（列挙型：特定のまとまったグループのみを受け入れる型）
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// enumでイコールを付けない場合
var ClothesSize;
(function (ClothesSize) {
    ClothesSize[ClothesSize["S"] = 0] = "S";
    ClothesSize[ClothesSize["M"] = 1] = "M";
    ClothesSize[ClothesSize["L"] = 2] = "L";
})(ClothesSize || (ClothesSize = {}));
var clothes = {
    gender: "man",
    size: ClothesSize.L
};
console.log(ClothesSize.L); // 2
// any型（どんな型でも入る, JSに戻るイメージ, anyはなるべく使わない）
var anything = true;
anything = "hello";
anything = ["hello", 3, false];
anything = {};
anything.hoge = "hoge";
var anythingArray = [true, 3, "hello"];
// ユニオン型（複数の型の受け入れが可能）
var unionType = 10;
unionType = "hello";
var unionTypeArray = [21, "hello"];
// リテラル型（完全に決まった値しか入れられなくなる）
// appleしか入れれなくなる
var apple = "apple";
var example = true;
var example2 = false;
// constで値をしてすると自動でリテラル型になる
var banana = "banana";
// letの場合にはString型になる
var grape = "grape";
// ユニオン型＋リテラル型
// 指定した三つの値しか入れれない
// sizeはリテラルになっている（cloth.size = largeができない）
var clothSize = "small";
var cloth = {
    color: "white",
    size: clothSize
};
var colorVariation = "red";
// 関数に型付け（パラメータと戻り値に型をつける）
function add(num1, num2) {
    return num1 + num2;
}
// 型推論の場合
// 戻り値は推論するがパラメータに関しては指定がないとany型になる
function sub(num1, num2) {
    return num1 + num2;
}
// void型（戻り値がない場合）
function sayHello() {
    console.log("Hello!");
}
// 関数を保持する変数に対しての型付け
// 関数の型注釈は戻り値の指定をする際に矢印になる
var anotherAdd = add;
var multipliction = function (num1, num2) {
    return num1 * num2;
};
var multipliction2 = function (num1, num2) {
    return num1 * num2;
};
var multipliction3 = function (num1, num2) {
    return num1 * num2;
};
// アロー関数における型宣言
var doubleNumber = function (number) { return number * 2; };
var doubleNumber2 = function (num) { return num * 2; };
// コールバック関数に対する型付け
function doubleAndHandle(num, callback) {
    var doubleNum = callback(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown型（anyより少し厳しめ）
var unknownInput;
var anyInput;
var text, text2;
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
function error(message) {
    throw new Error(message);
}
console.log(error("This is an error"));
