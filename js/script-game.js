
document.getElementById("game-btn").addEventListener("click",function(event) {event.preventDefault(); button3()});
/* Adding eventlistener to submit button */

function button3() {
    var input = document.getElementById("game-name-input").value;
    getplanet(input);             /* Retrieving user input and calling getplanet function */

}


function getplanet(input) {       /* Getplanet function uses SWAPI to retrieve planet details */
    
    var settings = {
        "url": "https://swapi.dev/api/planets/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        
    
        var name = document.getElementById("planet-name").innerHTML = "&nbsp;"+response.results[0].name;
        var climate = document.getElementById("planet-climate").innerHTML = "&nbsp;"+ response.results[0].climate;
        var terrain = document.getElementById("planet-terrain").innerHTML = "&nbsp;"+ response.results[0].terrain;
        var populatuon = document.getElementById("planet-population").innerHTML = "&nbsp;"+ response.results[0].population;
        /* Inserts selected planet detals into game.html */
      });
    
}

document.getElementById("species-btn").addEventListener("click",function(event) {event.preventDefault(); button4()});
/* Adding eventlistener to submit button */

function button4() {
    var input = document.getElementById("species-name-input").value;
    getspecies(input);          /* Retrieving user input and calling getspecies function */
    
}


function getspecies(input) {     /* Getspecies function uses SWAPI to retrieve species details */
    
    var settings = {
        "url": "https://swapi.dev/api/species/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        
    
        var name = document.getElementById("species-name").innerHTML = "&nbsp;"+response.results[0].name;
        var average_height = document.getElementById("species-height").innerHTML = "&nbsp;"+ response.results[0].average_height+"cm";
        var average_lifespan = document.getElementById("species-lifespan").innerHTML = "&nbsp;"+ response.results[0].average_lifespan+"years";
        var url = response.results[0].homeworld  /* Inserts selected species detals into game.html */
        var settings = {
          "url": url,
          "method": "GET",      /* Uses SWAPI and a different url to find homeworld/planet */
          "timeout": 0,
        };
        
        $.ajax(settings).done(function (response2) {
          console.log(response2);

          var homeworld = document.getElementById("species-homeworld").innerHTML = "&nbsp;"+ response2.name;
          /* Inserts homeworld/planet into game.html */
        });
      });
    
}

