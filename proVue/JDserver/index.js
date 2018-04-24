const express=require('express')

const app=express()

app.use(express.static('./static'))

app.all('*',(req,res,next)=>{
    res.set('Access-Control-Allow-Origin','*')
    next()
})
app.get('/goods',require('./src/get.goods.js'))

app.get('/shops',require('./src/get.shops.js'))

app.get('/ctgs',require('./src/get.ctgs.js'))

app.get('/classify',require('./src/get.classify.js'))

app.listen(88)