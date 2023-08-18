const express = require('express')
const bodyParser =require('body-parser')
const controller = require('./Inventory/items')


const app =express()

app.use(bodyParser.json())

// Define Routes 
app.get('/', controller.getAllItems);
app.get('/:id', controller.getOneItem);
app.post('/', controller.CreateItems);
app.put('/:id', controller.updateItem);
app.delete('/:id', controller.deleteItem);




const port = 4646

app.listen(port,()=>{
    console.log(`Server listening attentively at ${port}`)
})


