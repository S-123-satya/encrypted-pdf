const PDFDocument = require('pdfkit');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

async function generatePDF(data,password) {
  return new Promise((resolve, reject) =>{
    const doc = new PDFDocument({
      userPassword:password,
    });
    doc.pipe(fs.createWriteStream('output.pdf'));
    
    // Add data to the PDF
    data.forEach((row) => {
      doc.text(JSON.stringify(row));
      doc.moveDown();
    });
    
    doc.end();
    console.log('PDF generated successfully.');
    resolve('PDF generated successfully.')
  })
}

module.exports=generatePDF;
