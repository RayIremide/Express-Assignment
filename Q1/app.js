const express = require("express");
const path = require('path')

const filePathRoot = path.join(__dirname, "webpages", "index.html");
const filePathContent = path.join(__dirname, "webpages", "content.html");
const filePathRandom = path.join(__dirname, "webpages", "random.html");

const app = express();

const port = 4040;

app.use (express.static('webpages'))


app.get("/", (req,res)=>{
    res.sendFile(filePathRoot)
});

app.get("/index.html", (req,res)=>{
    res.sendFile(filePathContent)
});

app.get("*", (req,res)=>{
    res.sendFile(filePathRandom)
});



app.listen(port, () => {
  console.log(`Server is up and running at ${port}`);
});



// app.get("/", async(req,res)=>{
//     try{
//         const file = await fs.readFile(filePathRoot)
//         res.sendFile('file')
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// );




