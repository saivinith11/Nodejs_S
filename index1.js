let name ='sai';
console.log(name);

let interestRate=0.5;
interestRate=1;
console.log(interestRate);

////////////////

let person={
    name : 'mosh',
    age  :'30'
};

//dot notation
person.name='vini';

//Bracket notation
person['name']='ani'

console.log(person.name);

/////////////////////////////

//Arrays

let colors= ['red','blue'];
colors[2]='green';
console.log(colors.length);



//functions

function greet(name,lastName){
    console.log('hello'  +name +' '+lastName);
}

greet('vinith','ravula');


//calculate the function
function square(number){
    return number*number;
}
console.log(square(2));
