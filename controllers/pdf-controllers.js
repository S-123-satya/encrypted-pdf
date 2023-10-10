const fs = require('fs');
const Expense = require("../models/expense");
const generatePDF = require("../utils/generate-pdf");
const path = require('path');

module.exports.getPdfController=async (req,res)=>{
    const {password}=req.query;
    const data= await Expense.findAll();

    console.log(data);
    const doc=await generatePDF(data,password);
    
    res.sendFile(path.join(__dirname,'..','output.pdf'));
}