const path=require('path')
const express=require('express')

const app=express()
//console.log(__dirname)
//console.log(__filename)


console.log(path.join(__dirname,'../public'))

//Define paths for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../views')


///setup handle bars engine and view locations
app.set('view engine','hbs')
app.set('views',viewPath)

//set up stati directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'vinith'
    })
})



app.get('',(req,res)=>{
    res.send('<h1>whether</h1>')//Hello express
})

app.get('/help',(req,res)=>{
    res.send('Help page!')
})

app.get('/about',(req,res)=>{
    res.send('about page!')
})

app.get('/whether',(req,res)=>{
    res.send('whether page!')
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
       return res.send({
            error:'you mustprovide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})


app.get('*',(req,res)=>{
    res.send('My 404 page')
})
//json

app.get('/json',(req,res)=>{
    res.send({
        name:'vinith',
        age:25
    })
})


//app.com
//app.com/help
//app.com/about

app.listen(3000,()=>{
    console.log('server is up on port 3000cd src')
})