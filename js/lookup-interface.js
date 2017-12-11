import { Lookup } from './../js/lookup.js'

showData(response) {
  $("#result").show();
  if(response.data.length > 0) {
  for (var i = 0; i < response.data.length; i++) {
    let index = response[i];
    let profile = index.profile;
    $("#result").append(`${profile.first_name}  ${profile.last_name}`)
    }
  }
}

error(error) {
  $("#result").text("Something went wrong...")
}

$(document).ready(function() {
  var newLookup = new Lookup();
  $("#lookup-name").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    newCall.getData(name, showData, error)
  });

});
