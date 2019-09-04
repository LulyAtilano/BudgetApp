// OBJECT DESTRUCTURING

/*
const person = {
  //name: 'Luly',
  age: 32,
  location: {
    city: 'Guadalajara',
    temperature: 92
  }
};
// default value
const { name = 'Luly', age } = person;

console.log(`${name} is ${age}`);
//console.log(`It's ${location.temperature} in ${location.city}`);

const { city, temperature: temp } = person.location;
if ( city && temp ) {
  console.log(`It's ${temp} in ${city}`);
}

// CHALLENGE
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    //name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

if (publisherName) {
  console.log(publisherName);
}
*/

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennylvania', '19147'];
// Regular way to access the values of the array
console.log(`You're in ${address[1]}, ${address[2]}`)

// Destructuring to access the same values
//const [ street, city, state, zip] = address;
//console.log(`You're in ${city}, ${state}`);

// If we want to skip the first and last value, we could try this
const [, city, state] = address;
console.log(`You're in ${city}, ${state}`);

// Default values in the array
const addressNew = [];
const [, , stateNew = 'Nueva York'] = addressNew;
console.log(`You're is ${stateNew}.`);


// CHALLENGE

const item = ['Coffee (hot)', '$2.0', '$2.50', '$2.75'];
const [coffee, ,priceMedium ] = item;
console.log(`A medium ${coffee} costs ${priceMedium}`);
