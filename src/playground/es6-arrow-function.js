const square = function(x) {
  return x * x;
}

const squareArrow = x => x * x;

//console.log(square(8));
//console.log(squareArrow(4));

//const getFirstName = name => name.split(' ')[0];
const getFirstName = (name) => { return name.split(' ')[0] };

console.log(getFirstName('Luly Atilano'));
