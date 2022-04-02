const object = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
let newKey = 'hobbie'
const hobbie = 'play football'
object[newKey] =hobbie;

let newKey2 = 'lastName';
const lastName = 'Silva'
object[newKey2] = lastName
newKey2 = 'fullName'
const fullName = `${object.firstName} ${object.lastName}`;
object[newKey2] =fullName
console.log(object)