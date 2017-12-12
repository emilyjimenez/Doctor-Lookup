import { Lookup } from './../js/lookup.js';

let displayData = function(response) {
   $("#result").show();
    if (response.data.length !== 0) {
      for (let i = 0; i < response.data.length; i++) {
        let doctor = response.data[i];
        let profile = doctor.profile;
         $("#result").append("<li>" + profile.last_name + ", " + profile.first_name + "</li>");
      }
  } else {
    $("#result").append("No results found... try again");
  }
}

$(document).ready(function() {
  let newLookup = new Lookup();
  $("#lookup-name").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    newLookup.getData(name, displayData);
  });
});
