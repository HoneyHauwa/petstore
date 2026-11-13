const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

let myProduct = require('./products.js');
console.log(myProduct);

// use morgan library
app.use((req, res, next) => {
    console.log('Incoming request: ' + req.method + ' from: ' + req.url);
    //res.end('Hello World !!!')
    next();
});

app.get('/collections/products', (req, res)=>{
    //res.send('A GET request, I read and send back the result to you')
    res.json(myProduct);
})

app.post("/", (req, res)=>{
    res.send("This is a POST request, Let's create a new element");
})

app.put("/", (req, res)=>{
    res.send("Let's change an element");
})

app.delete("/", (req, res)=>{
    res.send("Let's delete an element");
})

app.use((req, res) => {
    res.status(404).send("Page not found !")
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})