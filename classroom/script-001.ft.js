var n = 2;
var vazio;
console.log(vazio);

var vazio = "não vazio";
console.log(vazio);

let ok = "ok";
let numero = 27;
let nulo;
console.log(nulo);

let n2 = "5";
console.log(Number(n2));

console.log(Number(n2) + 5);

var isAAdult = 21;
var isATeenager = 16;
var isEnabled = true;
const resultT = isAAdult <= isATeenager ? isEnabled : false;
const resultT1 = isAAdult > 0 && "Isso é doido";
const resultT2 = isAAdult < 19 || "Pois é, e quem aqui não é";
const resultT3 = !isAAdult <= isATeenager ? isEnabled : false;
const resultC = isAAdult === isATeenager;
const resultC2 = isAAdult == isATeenager;
const resultC3 = isAAdult !== isATeenager;
const resultC4 = isAAdult != isATeenager;
const resultD = isAAdult >= isEnabled;
console.log(resultT1);
console.log(resultT2);
console.log(resultT3);
