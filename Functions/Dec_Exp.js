// function declaration

function walk(){
    console.log('walk');
}

//anonymous function expression

const run=function(){
    console.log('run');
};
let move=run;
run();
move();