console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
let ten = '10';
let numTen = 10;
console.log(typeof numTen === typeof ten);
tenInt = parseInt(ten);
console.log(tenInt === numTen);


let gra = '9.8';
console.log(parseFloat(gra)== 10);
gravity = Math.ceil(parseFloat(gra));
console.log(gravity === 10);

ranNum = Math.random();

//Generate a random number between 0 and 100 inclusively.
tenRan = Math.ceil(ranNum * 100);
console.log(tenRan);

// Generate a random number between 50 and 100 inclusively.
rangNum = Math.ceil(ranNum * 50);
rangeNum = rangNum + 50;
console.log(rangeNum);

//Generate a random number between 0 and 255 inclusively.
twoRan = Math.ceil(ranNum * 255);
console.log(twoRan);

let word = "JavaScript";
let index = Math.ceil(ranNum * 9);
console.log(word[index]);




let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substr(31, 24));