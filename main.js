// #### DATI ####

const userAge = parseInt(prompt(`Quanti anni hai?`));
const distance = prompt(`quanti chilometri percorri?`);
let costPerKm = 0.21;
let totalCost = costPerKm * distance;
// log

console.log("userAge:", userAge);
console.log("distance:", distance);
console.log("costPerKm:", costPerKm);

// risoluzione

// minor discount
const minorDiscount = userAge >= 0 && userAge <= 18;
const elderDiscount = userAge >= 65;

if (minorDiscount == true) {
  console.log("minorDiscount", minorDiscount);
  totalCost = totalCost * 0.8;

  // elder discount
} else if (elderDiscount == true) {
  console.log("elderDiscount", elderDiscount);
  totalCost = totalCost * 0.6;
}

let totalCostOutput = totalCost.toFixed(2);

console.log("totalCost:", totalCost);
console.log("totalCostOutput", totalCostOutput);
alert(totalCostOutput);
