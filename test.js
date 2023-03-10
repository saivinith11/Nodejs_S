const assert=require('assert');
const {add}=require('../src/app');


describe('the add function',()=>{
    it('should add two members togeher',()=>{
        const result=add(2,2);
        assert.equal(result,5);
    })
})