
var settings = {
    "url": "https://swapi.dev/api/people/1/",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);

    
  });
