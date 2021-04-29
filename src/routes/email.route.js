const express = require('express');
const router = express.Router();

const EmailController = require('../controller/email.controller');


//Route to test the server is up and running
router.get('/ping', (req,res)=>{
    res.send(`Server is running on ${process.env.PORT}`);
});

//Route to create a schedule email record
router.post('/email', EmailController.create);

//Route to delete a schedule email
router.delete('/email/:id', (req,res)=>{
    res.send(`Server is running on ${process.env.PORT}`);
});

//Route to update a schedule email
router.patch('/email/:id', (req,res)=>{
    res.send(`Server is running on ${process.env.PORT}`);
});

//Route to get all the schedule email with pagination
router.get('/ping', (req,res)=>{
    res.send(`Server is running on ${process.env.PORT}`);
});

//Route to get individual email with id
router.get('/ping', (req,res)=>{
    res.send(`Server is running on ${process.env.PORT}`);
});

module.exports = router;