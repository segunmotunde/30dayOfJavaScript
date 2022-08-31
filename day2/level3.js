let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(sentence.match(/Love/gi));

let sentence1 = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence1.match(/because/gi));

let sentenceOne = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let realSentence = sentenceOne.replace(/[^a-zA-Z0-9 ]/g, "");

console.log(realSentence);


let gross = "'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
const net = gross.split(" ");
console.log(net);
let payOne = Number(net[2]);
let payTwo = Number(net[8]);
let payThree = Number(net[12]);

let earn = payOne+payTwo+payThree;
console.log(earn);