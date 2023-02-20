function added(num1, num2) {
  const result = num1 + num2;
  return result;
}
const result = added(12, 13);
console.log(result);

//  Es-6

// default parameter

function add(num1, num2 = 0) {
  const result = num1 + num2;
  return result;
}
const results = add(12);
console.log(results);

//  name is es 6
function names(first, last="Hosen") {
  const name =`${first} ${last}`;
  return name;
}
const namess = names("Mozammel","Jabir")
console.log(namess)
