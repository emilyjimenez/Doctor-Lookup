var apiKey = require('./../.env').apiKey;

export class Lookup {
  constructor() {
  }
  getData(response, displayData, error) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${response}&location=37.773,-122.413,100&skip=2&limit=10&user_key=${apiKey}`)
    .then(function(response){
      displayData(response);
    }).fail(function(error) {
      throw(error);
    });
  }
}
