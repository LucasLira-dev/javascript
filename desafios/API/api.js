const express= require('express')

const app= express()

app.get('/soma', (req, res)=>{
    const soma= 2 + 2
    res.send(soma)
})

app.listen(3333, ()=>{
    console.log("servidor aberto")
})