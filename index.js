const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/download', (req, res) => {

  const useragent = navigator.userAgent;
  if(useragent.includes('Instagram')){
    const pdfString = 'This is a dummy PDF string.';
    const fileName = 'dummy.pdf';
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.send(pdfString);
  }else{
    window.location.href = 'https://experience.4excelerate.org/'
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});