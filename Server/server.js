const express = require('express');

const Pizza = require('./models/pizzaModel');

const app = express();

const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017')




app.get('/', (req, res) => res.send('Server Working' + port));

// app.get('/getpizzas', (req, res) =>{

//     Pizza.find({},(err, docs)=>{

//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(docs)
//         }
//     })


// });

app.get('/getpizzas', async (req, res) => {
    try {
        const pizzas = await Pizza.find().exec();
        res.send(pizzas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))