var value;

function acceptAndReturn() {
  var data ='some date';
  // var value = 'local';
  for (var i = 0; i < 3; i++) {
    var k = i*i;
    console.log(i);
  }

  function childScope(){
    var childData = 'child data';
    return data;
  }
  childScope();
  console.log(childData);
  console.log(k);
  return value;
}
// console.log(acceptAndReturn(value));

value = "a stored string";

// var count = 0;
function counter() {
  var count = 0;
  function counterChild(){
    return ++count;
  }
  return counterChild;
}
var thing = counter();
// console.log(thing());
// console.log(thing());
// console.log(thing());
// console.log(thing());
function what(func) {
  console.log(func());
}

what(thing);
// for(var i = 0; i < 4; i++) {
//   console.log(thing());
// }
/**

counter() => 1
counter() => 2
counter() => 3
counter() => 4

*/
