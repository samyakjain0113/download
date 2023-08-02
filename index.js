const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit:"15mb"}))


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
      res.render('index.ejs')
    }
  } catch (error) {
    console.log(error);
  }


});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});