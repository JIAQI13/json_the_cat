
const request = require('request');
let name = process.argv[2];
request(`https://pi.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
  if (!error) {console.log('error:', error);}
   // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof body)
  const data = JSON.parse(body);
  if (data.length === 0){
      console.log('not found');
  }else{
      console.log(data[0].description);
  }
  //console.log(typeof data);

});
