const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/about', function(req, res, next){
    //res.send('ini adalah halaman about')
    res.send({success:true, keyword: req.query.keyword})
})

app.get('/txt-response', function(req, res, next){
    res.send('Hello World')
})

app.get('/product/:productId', function(req, res, next){
    //console.log(req.params)
    res.send({success:true, productId: req.params.productId})
})

app.get('/category/:productCategory/product/:productId', function(req, res, next){
    //console.log(req.params)
    res.send(req.params)
})

app.get('/error', (req, res, next) => {
    next(new Error('contoh error'))
})

app.get('/multi-handler', (req, res, next) => {
    //validasi request
    if (req.query.keyword === 'satu'){
        return next()
    }
    return res.send('Keyword harus satu')
}, function(req, res, next){
    //handle request
    res.send('Sukses')
})

app.get('/index', function(req, res, next){
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
})

app.get('/download', function(req, res, next){
    res.download(__dirname + '/index.html', 'Index.html')
})

app.get('/pelatihan', function(req, res, next){
    res.render('index', {subBab: req.query.subBab})
})

app.use((err, req, res, next)=>{
    console.log(err)
    res.send('terjadi error')
})

app.listen(8000, function(){
    console.log('App listen on port 8000')
})