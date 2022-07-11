const isDog = true;
console.log(isDog == true ? "Pat, pat, good dog" : "find me a dog to pat!");
// 2:
const speedLimit = 40;
const yourSpeed = 90;
console.log(
  yourSpeed > speedLimit
    ? "you're going too fast!"
    : "You're driving below the speed limit, Oma"
);
// 3:
const age = 23;
console.log(age < 16 ? "serve butter beer" : "serve beer");
// 4:
const isStudent = true;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");
// 5:
let okMarie = "cake";
console.log(okMarie ? "Let them eat cake" : "Oh, bother");
// 6:
let num1 = 30;
let num2 = 939;
let num3 = 40.9;
console.log(num1 % 2 === 0 ? `${num1} is even` : `${num1} is odd`);
console.log(num2 % 2 === 0 ? `${num2} is even` : `${num2} is odd`);
console.log(num3 % 2 === 0 ? `${num3} is even` : `${num3} is odd`);
