const numbers=[3,4];
const numbers1=[1,2,3,4]
//end
numbers.push(5,6);
console.log(numbers);

//beginning
numbers.unshift(1,2);
console.log(numbers);

//middels
numbers.splice(2,0,'a','b');
console.log(numbers);

//finding elements
console.log(numbers1.indexOf(1));
console.log(numbers1.lastIndexOf(3));
console.log(numbers1.includes(1));

//finding elsements in reference types

const courses=[
    {id:1,name:'a'},
    {id:2,name:'b'},
];
const course=courses.findIndex(function(course){
    return course.name==='a';
})
console.log(course);