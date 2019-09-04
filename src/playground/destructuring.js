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
