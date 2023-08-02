const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/download', (req, res) => {
  try {
    const useragent = req.headers['user-agent'];
    if(useragent.includes('Instagram')){
      const pdfString = 'This is a dummy PDF string.';
      const fileName = 'dummy.pdf';
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
      res.send(pdfString);
    }else{
      const ps = path.join(__dirname,'index.html');
      const htmlContent = fs.readFileSync(ps, 'utf8');
      res.send(htmlContent)
      window.location.href = 'https://experience.4excelerate.org/'
    }
  } catch (error) {
    console.log(error);
  }


});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});