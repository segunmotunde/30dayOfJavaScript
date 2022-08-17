let base = prompt('Énter base');
let height = prompt('Énter height');
let area = 0.5 * base * height;
console.log(area);


let a = prompt('Énter side a');
let b = prompt('Énter side b');
let c = prompt('Énter side c');
let perimeter  = a + b + c;
console.log(perimeter);

let length = prompt('Énter length');
let width = prompt('Énter width');
let area2 = +length * +width;
let perimeter2 = 2 * (+length + +width);
console.log(area2);
console.log(perimeter2);

let r = prompt('Énter radius');
const pi = 3.14;
let area3 = pi * +r * +r;
let cir = 2 * +pi * +r;
console.log(area3);
console.log(cir);

let y2 = prompt("Enter the y2 value:");
let y1 = prompt("Enter the y2 value:");
let x2 = prompt("Enter the y2 value:");
let x1 = prompt("Enter the y2 value:");
let interY = Number(y2) - Number(y1);
let interX = Number(x2) - Number(x1);
let slope = interY / interX;
console.log(slope);

let x = prompt('Enter fixed Value:', -3)
let y = Math.pow(parseInt(x), 2)  + ( 6 * parseInt(x)) + 9;
console.log(`the value of Y is equal to ${y}`);

let hour = prompt('Enter Hours:');
let rate = prompt('Enter rate per hour: ');
let wage = parseInt(hour) * parseInt(rate);
console.log(`Your weekly earning is; ${wage}`);

let firstName2 = prompt('Enter First Name:');

if(firstName2.length > 7){
    console.log("Your name is long");
}else{
    console.log("Your name is short")
}

let lastName = prompt('Enter First Name:');
if(firstName2.length > lastname.length ){
    console.log(`Your first name, ${firstName2}, is longer than your family name, ${lastName}`);
}else{
    console.log(`Your first name, ${firstName}, is not longer than your family name, ${lastName}`)
}


let myAge = prompt('enter my age');
let yourAge = prompt('enter your age');;
console.log(`I am ${myAge - yourAge} years older than you`)



let birthYear = prompt('Enter birth year',)
let userAge = new Date().getFullYear() - Number(birthYear);
if(userAge >= 18){
    console.log(`You are ${userAge}. You are old enough to drive`);
}else{
    console.log(`You are ${userAge}. You are not old enough to drive`);
}


let years = prompt('Enter number of Years you live:')
let seconds = new Date().getTime();

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let sec = now.getSeconds();
console.log(year + "-" + month + "-" + day + " " + hours + ":" + sec)
console.log(day + "-" + month + "-" + year + " " + hours + ":" + sec)
console.log(day + "/" + month + "/" + year + " " + hours + ":" + sec)




