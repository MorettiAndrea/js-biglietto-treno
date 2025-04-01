// #### DATI ####

const userAge = parseInt(prompt(`Quanti anni hai?`));
const distance = prompt(`quanti chilometri percorri?`);
let costPerKm = 0.21;
// let discount = 1;

let totalCost = costPerKm * distance;
// log

console.log("userAge:", userAge);
console.log("distance:", distance);
console.log("costPerKm:", costPerKm);
// console.log("discount:", discount);

// risoluzione

const minorDiscount = userAge >= 0 && userAge <= 18;

if (minorDiscount == true) {
  console.log("minorDiscount", minorDiscount);
  //   discount = 0.8;
  totalCost = totalCost * 0.8;
}

console.log("totalCost:", totalCost);
