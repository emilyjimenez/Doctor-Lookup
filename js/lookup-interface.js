import { Lookup } from './../js/lookup.js';

let formatPhone = function(phone) {
  return phone.slice(0,3)+"-"+phone.slice(3,6)+"-"+phone.slice(6);
}

let displayData = function(response) {
  $("#result").show();
  if (response.data.length > 0) {
    for (let i = 0; i < response.data.length; i++) {
      let index = response.data[i];
      let profile = index.profile;
      $("#result").append(`<h3>${profile.last_name},  ${profile.first_name}</h3>`);
         for (let j = 0; j < index.practices.length; j++) {
          let practice = index.practices[j];
          let cityStateZip = (practice.visit_address.city + `, ` + practice.visit_address.state + ` ` + practice.visit_address.zip);
          let googleResult = `https://www.google.com/search?q=${practice.name}${cityStateZip}`
          let phone = practice.phones[0].number;
          let phoneDisplay = formatPhone(phone);
          let website = practice.website;
           //There doesnt seem to be ANY websites for Doctors in these results so I'm linking a google search result if statement.//
          if (website === undefined) {
            $("#result").append(`<p class="practice"><a href="https://www.google.com/search?q=${practice.name} ${cityStateZip}">${practice.name}</a></p>`);
            } else {
              $("#result").append(`<p class="practice"><a href="${website}">${practice.name}</a></p>`);
            }
            $("#result").append(`<p class="address">${practice.visit_address.street}</p><p class="address"> ${cityStateZip}</p>`);
            $("#result").append(`<p class="phone">` + phoneDisplay + `</p>`);
         }
      }
    } else {
    $("#result").append("No Doctors found... try again");
  }
};

let error = function(error) {
  $("#result").text("Something went wrong, no doctors found!");
}

$(document).ready(function() {
  let newLookup = new Lookup();
  $("#lookup-name").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    newLookup.getData(name, displayData);
  });
});
