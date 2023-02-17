let hour=10;
if(hour>=6 && hour<=10){
    console.log('good morning');
}
/////switch 
let role ='guest';

switch(role) {
    case 'guest' :
        console.log('Guest User');
        break;

        default:
            console.log("unknow user");
}

///infinite loops

let i=0;
while(i<5){
    console.log(i);
    i++;
}