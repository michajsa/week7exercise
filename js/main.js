var string="this is a string datatype";
console.log(string);


var number = 80;
console.log(number);

var bool= true;
console.log(bool);

var array = [string, number, bool];
console.log(array[1]);

var carObject = {
  make: 'Honda',
  color: 'Black',
  wheels: 4,
  fast: true
}

console.log(carObject.make);
console.log(carObject.color);

var first ='This  ';
var second ='is  ';
var third = 'concatenation.';
var total= 'first+second+third';

console.log(total);

var concat1 = 40;
var concat2 = 80;
var concatTotal = concat1 + concat2;

console.log('The sum is: ' + concatTotal);

var num1 = 50;
var num2 = 90;

if(num1> num2) {
  console.log('num1 is lager than num2');
}else {
  console.log('num2 is larger than num1');
}

var num4 = 5
var num5 = 0;

if(num4 < num5 || num4 === num5 && true) {
  console.log('If statement ran!');
}else {
  console.log('Else statement ran!');
}

// = assignment operator
// == equal to
// === strict equals


var newArray = ['chocolate', 6, false,'jerry'];

for(var i= 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

var array2 = [1, 3, 5, 7, 9];
var total = 0;

for(var i = 0; i < array2.length; i++){
  total = total + array2[i];
};

console.log(total);

var array3 = [11, 33, 77, 99];

for(var i = 0; i < array3.length; i++) {
  if(array3[i]>= 55 || array3[i] <= 100){
    console.log(array3[i]);
  };
};

// i++
// i+= 5;
// i = i + 5;

function testStuff(a, b){
  if(a > 25 &&b < 100){
    console.log(a + "is greater than 25 and" + b +'is less than 100');
  }else {
    console.log(a + " is NOT greater than 25 or" + b +"is NOT less than 100");
  };
};

// testStuff(10, 101);
// testStuff(26, 99);
// testStuff(100, 25);

// function helloWorld(name) {
//   console.log('Hello' + name);
// };
//
// helloWorld();


function testStuff2(c, d){
  if(c == 25){
    console.log(c + "is equal to 25");
  }else if(d <= 100){
    console.log(d+ "is less than or equal to 100");
  }else {
    console.log("neither if or else if statement ran");
  };
};

testStuff2(26 , 101);
// testStuff2(25 , 99);
// testStuff2(102 , 24);
