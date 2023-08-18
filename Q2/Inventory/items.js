
const items =[
{
    "product_name": "20 Tubers of Yam",
      "price": 10000,
      "currency": "NGA",
      "size": "small sized",
      "id": 1,
},
{
    "product_name": "Maggie Cubes",
      "price": 5000,
      "currency": "NGA",
      "size": "medium sized",
      "id": 2,
},
{
    "product_name": "Indomie Noodles",
      "price": 40000,
      "currency": "NGA",
      "size": "Large sized",
      "id": 3,
}
]




// Create a new item
const CreateItems = (req,res)=> {
    const item =req.body
    items.push(item)
    item.id = Math.floor(Math.random() * 100)

    return res.status(201).json({
        data: item,
        error: null
    })
}



const getAllItems = (req,res)=>{
    res.json(items)
}




// Get one item
const getOneItem = (req,res)=>{
    const id = req.params.id
    const findItem = items.find((item)=>{
        return item.id == parseInt(id)
    })

    if(!findItem){
        res.status(404).send('Item not in the inventory')
        return
    }
    res.status(200).json(findItem)
}


// Update Item
const updateItem = (req,res)=>{
    const id = req.params.id
    const update = req.body
    const findItem =items.findIndex(item => item.id === parseInt(id))

    if(!findItem){
        res.status(404).end('Item not in the inventory')
        return
    }
    items[findItem]={...items[findItem], ...update}
    res.status(200).json(items[findItem])

}

// Delete item
const deleteItem =(req,res)=>{
    const id = req.params.id
    const findItem =items.findIndex(item => item.id ===parseInt(id))

    if(!findItem){
        res.status(404).end('Item not in the inventory')
        return
    }
    items.splice(findItem,1)
    res.send(  `Student with id:${id},deleted successfully`  )
}





module.exports = {
    getOneItem,
    updateItem,
    deleteItem,
    CreateItems,
    getAllItems
}