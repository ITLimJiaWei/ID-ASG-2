document.getElementById("game-btn").addEventListener("click",function(event) {event.preventDefault(); button3()});

function button3() {
    var input = document.getElementById("game-name-input").value;
    getplanet(input);
    
}


function getplanet(input) {
    
    var settings = {
        "url": "https://swapi.dev/api/planets/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
    
        var name = document.getElementById("planet-name").innerHTML = "&nbsp;"+response.results[0].name;
        var climate = document.getElementById("planet-climate").innerHTML = "&nbsp;"+ response.results[0].climate;
        var terrain = document.getElementById("planet-terrain").innerHTML = "&nbsp;"+ response.results[0].terrain;
        var populatuon = document.getElementById("planet-population").innerHTML = "&nbsp;"+ response.results[0].population;

      });
    
}

document.getElementById("species-btn").addEventListener("click",function(event) {event.preventDefault(); button4()});

function button4() {
    var input = document.getElementById("species-name-input").value;
    getspecies(input);
    
}


function getspecies(input) {
    
    var settings = {
        "url": "https://swapi.dev/api/species/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
    
        var name = document.getElementById("species-name").innerHTML = "&nbsp;"+response.results[0].name;
        var average_height = document.getElementById("species-height").innerHTML = "&nbsp;"+ response.results[0].average_height+"cm";
        var average_lifespan = document.getElementById("species-lifespan").innerHTML = "&nbsp;"+ response.results[0].average_lifespan+"years";
        var url = response.results[0].homeworld
        var settings = {
          "url": url,
          "method": "GET",
          "timeout": 0,
        };
        
        $.ajax(settings).done(function (response2) {
          console.log(response2);

          var homeworld = document.getElementById("species-homeworld").innerHTML = "&nbsp;"+ response2.name;
        });
      });
    
}

