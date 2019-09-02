var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//const nameConst = 'Gunther';
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fulName = 'Jen Mead';
let firstName;

if (fulName) {
  firstName = fulName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
