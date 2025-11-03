/* 
Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
function funChoice(lst)
{
    return lst[Math.floor(Math.random()*lst.length)];

}
let Adjectives = ["Crazy", "Amazing", "Fire"];
let ShopName = ["Engine", "Foods", "Garments"];
let AnotherWord = ["Bros", "Limited", "Hub"];

let adjectives = funChoice(Adjectives);
let shopName = funChoice(ShopName);
let anotherWord = funChoice(AnotherWord);

console.log(`Name Generated:  ${adjectives}-${shopName}-${anotherWord}`);