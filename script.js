"use strict";

//use your info not mitch, hes a placeholder
const name = "Mitch Cuckovitch";
let age = 27;
const birthday = "January 24";
let pineapplePizza = true;
const lifeEvents = [
  "I was born in Troy, Michigan",
  "I went to Hope College",
  "I fractured my scraphoid",
  "I ate Qdoba 45 times this year",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pinapples on pizza.
        I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${name} and I do not like pinapples on pizza.
        I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
//while(true){}
