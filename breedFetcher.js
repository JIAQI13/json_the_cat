
const request = require('request');
const fetchBreedDescription = (breedName, callback) => request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {error ?  callback(error,null) : callback(null,JSON.parse(body)[0].description);});
module.exports = {fetchBreedDescription};