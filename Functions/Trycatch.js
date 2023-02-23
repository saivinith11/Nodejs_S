const person={
    firstName:'sai',
    lastName:'vinith',
    set fullName(value){
        if(typeof value!=='string')
        throw new Error('value is not a string.');

        const parts=value.split('');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};
try{
    person.fullName=null;
}
catch(e){
    console.log(e);
}
console.log(person);