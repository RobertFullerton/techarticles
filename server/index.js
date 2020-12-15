const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fetch = require('node-fetch');
const cheerio= require('cheerio');

const app = express();

app.use(cors());

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

// app.get('/search/:location/:search_term', (res, rep) => {
//   const { lcation, search_term } = requst.params;
  
//   const url= 'https://${location}.craigslist.org/search/sss?sort=date&query=${search_term}';
  
  fetch(url)
    .then(res => response.text())
    .then(body => {
      const results = getResults(body);
      response.json({
        results
      });
 });
s 
 app.get('https://www.techmeme.com/',(error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    
    $('.clus').each((i, el) => {
      const title = $(el)
      .find('.ii')
      .text();
       
      const link = $(el)
      .find('a.ourh')
      .attr('href'); 
      
      console.log(title);
      console.log(link);
   });
      console.log('Scraping Done...');
   }
});
 app.use((res, req, next) => {
  const error = new Error ('Not found');
  res.status(404);
  next(error);
  });
});       
app.use((error, req, res, next) => {
  res.status('res.statusCode || 500');
  res.json({
    message: error.message
   });
});


app.listen(3000, () => {
  console.log('Server is listening on port 3000.')
});