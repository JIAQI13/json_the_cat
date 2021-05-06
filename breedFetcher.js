
const request = require('request');
const fetchBreedDescription = (breedName, callback) =>{
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error,null);
    } else {
      const data = JSON.parse(body);
      //data.length === 0 ? console.log('not found'):console.log(data[0].description);
      callback(null,data[0].description);
    }
  });
};
module.exports = {fetchBreedDescription};