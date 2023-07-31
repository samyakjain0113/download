const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/download', (req, res) => {
  const pdfString = 'This is a dummy PDF string.';
  const fileName = 'dummy.pdf';
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
  res.send(pdfString);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});