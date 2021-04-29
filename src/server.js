const express = require('express');

//Initializing the environment variables using .env
require('dotenv').config();
const app = express();


app.use(express.json());
app.use('/api', require('./routes/email.route'));

app.listen(process.env.PORT, (err)=>{
    if(err) throw error;
    console.log("Server is ruinng on "+process.env.PORT);
})