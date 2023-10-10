const express = require('express');
const app=express();
require('dotenv').config();

const pdfRoutes=require('./routes/pdf-routes');
const sequelize = require('./utils/db');

app.use('/pdf',pdfRoutes);


sequelize.sync()
.then(()=>{
    console.log(`connected`);
    app.listen(3000,()=>{
        console.log(`listing on port no 3000`);
    })
})
.catch(err=>console.log(err))