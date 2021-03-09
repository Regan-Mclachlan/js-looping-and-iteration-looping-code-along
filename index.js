// Code your solutions in this file

const cards = ['Lisa', 'Kaitlin', 'Jan']

 function writeCards(cards){
let thankYouCards = [];
for (let i = 0; i < cards.length; i++) {
    thankYouCards.push (`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
}
return thankYouCards
 }
const number = 10
function countDown(number){
while (number >= 0 ) console.log(number--);}