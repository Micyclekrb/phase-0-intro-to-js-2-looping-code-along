/* 

//BASIC FOR LOOP
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};

//LOOPING WITH MULTIPLE VAR
const gifts = ["teddy bear", "drone", "doll"];

const wrapGifts = (gifts) => {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    };
    return gifts;
};

wrapGifts(gifts);
*/
//PART 1 ASSIGNMENT
const names = [];
const occasion = ""; 
const writeCards = (names) => {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    };
};
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

//PART 2 ASSIGNMENT
let countDown = () => {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    };
};    
countDown(10);