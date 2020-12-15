var results = $('.clus');

results.each((i, el) => {
  const result = $(el);

  const title = result
    .find('.ii')
    .text();

  const link = result
    .find('a.ourh')
    .attr('href');

  console.log(title);
  console.log(link);
});





//$('.clus').each((i, el) => {
//const title = $(el)
//.find('.ii')
//.text();

//const link = $(el)
//.find('a.ourh')
//.attr('href'); 
//});