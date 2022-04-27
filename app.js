// // You are given a function, Pokeman, that takes three
// parameters,
// // pokemonName, pokemonType, an array of different
//  pokemon attack methods,
// // pokemonAttackList.
// // 1. Create three instances of the Pokemon and save
//  them in a variable.
// // 2. Using prototype properties, add the following methods:
// // A method called callPokemon that will print the
// following: “I choose
// // you, <pokemon name>
// // •A method called attack that takes one parameter,
//  an attack number,
// // that will print the specific attack method from the
//  pokemonAttackList array as the following: “<pokemon name> used
// <attack method>”
// // Call each pokemon with the 2 methods you created.
// // Here is the Pokemon function:

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  return `I choose you, ${this.name} `;
};

Pokemon.prototype.attack = function (n) {
  return `${this.name} used ${this.attackList[n]}`;
};

const pikachu = new Pokemon("Pikachu", "Electric", [
  "Thunder Shock",
  "Quick Attack",
  " Tackle",
]);
const snorlax = new Pokemon("Snorlax", "Normal", [
  "Earthquake",
  "Air Slash Flying",
  "Ember Fire",
]);
const charizard = new Pokemon("Charizard", "fire", [
  "Wing Attack Flying",
  "Heavy Slam",
  "Outrage",
]);

console.log(snorlax.callPokemon());
console.log(pikachu.attack(2));
