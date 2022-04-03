// Code your solutions in this file
//for (let age = 30; age < 40; age ++) {
 //   console.log(`I'm ${age} years old. Happy birthday to me!`);
//}
  

/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Thank you ${gifts[i]} for the wonderful surprise gift!`);

  }

  return gifts;
}

wrapGifts(gifts); */


//const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, word) {
    const thankyouCards = []
      for (let i = 0; i < names.length; i++) {
   thankyouCards.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`)
      }
      return thankyouCards
    }
  
    function countDown(number) {
  
        while (number >= 0){
     console.log (number)
    number--
      }}