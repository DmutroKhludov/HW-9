 1
const logItems = function (array) {
    for (let i = 0; i < array.length; i++){
         console.log(`${i + 1} - ${array[i]}`);
     }
 };

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


 2
 const calculateEngravingPrice = function (message, pricePerWord) {
 const words = message.split(" ");
 const numWords = words.length;
 const totalPrice = numWords * pricePerWord;
 return totalPrice;
 };

 

 console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
 );  80

 console.log(
   calculateEngravingPrice(
     'Proin sociis natoque et magnis parturient montes mus',
     20,
   ),
 );  160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
 );  240

 console.log(
   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
 );  120


  3
 const findLongestWord = function (string) {
     const word = string.split(" ");
     let longestWord = word[0];

    for (let i = 0; i < word.length; i++){
         if (word[i].length > longestWord.length) {
            longestWord = word[i];
        }
     }
     return longestWord;
 };


 console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 'jumped'

 console.log(findLongestWord('Google do a roll')); 'Google'

 console.log(findLongestWord('May the force be with you')); 'force'
