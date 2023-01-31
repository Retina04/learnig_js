// function inchToFeet(inch) {
//   Feet = inch / 12;
// }
// console.log("Feet :", );
// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log("dadaFeet ", dadaFeet);

function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);