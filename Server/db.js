const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://nikhilmehta931:mahamaya931@yummy-pizza-db.agc1mqm.mongodb.net/yummy-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error', ()=>{
    console.log('Mongo DB Connection Failed');
})

module.exports = mongoose