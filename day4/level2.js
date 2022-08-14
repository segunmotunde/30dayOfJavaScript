let grade = 85;
if (grade >80 && grade <= 100){
    console.log(`your grade is A`);
} else if (grade >70 && grade <= 79){
    console.log(`your grade is B`);
}  else if (grade >60 && grade <= 69){
    console.log(`your grade is C`);
}  else if (grade >50 && grade <= 59){
    console.log(`your grade is D`);
}  else if (grade >0 && grade <= 49){
    console.log(`your grade is F`);
} else{
    console.log(`your insert the wrong score`);
}

let season = ['Autumn','Winter','Spring' ,'Summer'];
let month = `May`;
if (month =='September' || month == 'October' || month == 'November'){
    console.log(`the season is ${season[0]}`);
} else if (month =='December' || month == 'January' || month == 'February'){
    console.log(`the season is ${season[1]}`);
}else if (month =='March' || month == 'April' || month == 'May'){
    console.log(`the season is ${season[2]}`);
} else if (month =='June' || month == 'July' || month == 'August'){
    console.log(`the season is ${season[3]}`);
} else{
    console.log(`baba add correct month jhoor`);
}

let day = prompt('what is the day');
realDay = day.toLowerCase();
let out = ['Working Day', 'weekend'];
if (realDay == 'monday' || realDay == 'tuesday' || realDay == 'wednesday' || realDay == 'thursday' || realDay == 'friday'){
    console.log(`${realDay} is a ${out[0]}`);
} else if (realDay == 'saturday' || realDay == 'sunday'){
    console.log(`${realDay} is a ${out[1]}`);
} else{
    console.log(`Please stop stressing me, add correct day jhoor`);
}
























