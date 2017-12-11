var apiKey = require('./../.env').apiKey;

export class Lookup {
  constructor() {
  }
  getData(response, showData, error) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${searchBy}=${searchQuery}&location=${location}&skip=0&limit=15&user_key=${apiKey}`).then(function(response) {
      showData(response)
    }).fail(function(error) {
      error(error);
    });
  }
}
