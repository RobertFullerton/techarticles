const request = require('request');
const cheerio = require('cheerio');
//const fs = require('fs');
//const writeStream = fs.createWriteStream('techarticles.csv');

// Write Headers
//writeStream.write('Title,Link \n');


request('https://www.techmeme.com/',(error, response, html) => {
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
     
      // Write Row to CSV
     // writeStream.write( '${title} ${link} \n');
     });
      console.log('Scraping Done...');
   }
});