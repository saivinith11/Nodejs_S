const numbers=[3,4];
const numbers1=[1,2,3,4,3]
//end
numbers.push(5,6);
console.log(numbers);

//pop

//numbers.pop();
//console.log(numbers);

//shift (removes first element of the item)
//numbers.shift();
//console.log(numbers);

//beginning
numbers.unshift(1,2);
console.log(numbers);

//middels
numbers.splice(2,0,'a','b');
console.log(numbers);

//reverse
numbers.reverse(2,0,'a','b');
console.log(numbers);

//finding elements
console.log(numbers1.indexOf(1));
console.log(numbers1.lastIndexOf(3));
console.log(numbers1.includes(10));

//finding elsements in reference types

/*const courses=[
    {id:1,name:'a'},
    {id:2,name:'b'},
];
const course=courses.findIndex(function(course){
    return course.name==='a';
})
console.log(course);*/

const names=['sai','vinith','andru','monu','santosh']

//Indexof
const position= names.indexOf('monu');
console.log(position);

//slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

//join

let text = fruits.join(" and ");
console.log(text);

//fill

//fruits.fill("Kiwi");
//console.log(fruits);

//is array(returns true or false )
var result=Array.isArray(fruits);
console.log(result);

//copywithin
fruits.copyWithin(2,0);
console.log(fruits);
