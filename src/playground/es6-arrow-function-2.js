// arguments object - no longer bound with arrow functions
const add = (a,b) => {  
  //console.log(arguments);
  return a + b;
};

console.log(add(55,1));

//this keyword - no longer bound
const user =  {
  name: 'Luly',
  cities: ['Guadalajara', 'Ciudad de México', 'Monterrey'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' had lived in ' + city );
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10,20,30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
