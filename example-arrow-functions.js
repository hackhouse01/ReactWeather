var names = ['Ando','Jile','Jasm'];

// names.forEach(function(name){
//   console.log(name);
// });
//
// names.forEach((name) => {
//   console.log(name);
// });

//names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Hello'));

//
// var person = {
//   name: 'Some guy',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name+ ' says hi to '+name)
//     });
//   }
// }
//
// person.greet();
//
//
// function add(a,b){
//   return a+b;
// }
//
// console.log(add(1,2));

// addStatement
// addExpression

var addStatement = (a,b) => {
  return a+b
};

console.log(addStatement(1,2));

var addExpression = (a,b) => a+b;

console.log(addExpression(1,3));
