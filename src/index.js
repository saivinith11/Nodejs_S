const express = require('express');
const students=require('./students');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(express.json())

app.listen(9000, () => {
    console.log('up and running')
})

app.get('/',(req,res)=>{
    res.send('hello page')
})

app.get('/students',(req,res)=>{
    res.json(students);
})

app.post('/data',(req,res)=>{
    const user={
        id:students.length+1,
        first_name:req.body.first_name,
        last_name:req.body.last_name
    }

    students.push(user)
    res.json(user)
})

app.put('/api/update/:id',(req,res)=>{
    let id=req.params.id
    let first_name=req.body.first_name
    let last_name=req.body.last_name

    let index=students.findIndex((students)=>{
        return(students.id==Number.parseInt(id))
    })
    if(index>=0){
        let std=students[index]
        
        std.first_name=first_name
        std.last_name=last_name
        res.json(std)
    }else{
        res.status(404)
    }
})

app.delete('/api/delete/:id',(req,res)=>{
    let id=req.params.id;
    let index=students.findIndex((students)=>{
        return(students.id==Number.parseInt(id))
    })
    if(index>=0){
    let std=students[index]
    students.splice(index,1)
    res.json(std)
    }else{
        res.status(404)
    }
})