let gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    };

    return gifts;
};

wrapGifts(gifts);

let arrayOfNames = ["Matilda", "Veronica", "Brittney"];
let party = "birthday";

function writeCards(arrayOfNames, party) {
    let newArray = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${party} gift!`);
        console.log(newArray)
    };
    return newArray;
};
writeCards(arrayOfNames, party);

let number = 10;
function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
console.log(countDown(number));