
document.getElementById("game-btn").addEventListener("click",function(event) {event.preventDefault(); button3()});
/* Adding eventlistener to submit button */

function button3() {
    var input = document.getElementById("game-name-input").value;
    if (input.length <= 0 )
    {
      var error_msg = "Error: Please be more specifc in search";
      var msg = document.getElementById("error3").innerHTML = "&nbsp;"+error_msg;
    }
    else
    {
      getplanet(input);
    }
                 /* Retrieving user input and calling getplanet function */

}


function getplanet(input) {       /* Getplanet function uses SWAPI to retrieve planet details */
    
    var settings = {
        "url": "https://swapi.dev/api/planets/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        if ( response.count === 0 )
        {
          var error_msg = "Error: Please be more specifc in search";
          document.getElementById("error3").innerHTML = "&nbsp;"+error_msg;
          
        }
        else
        {
          document.getElementById("error3").innerHTML = "";
          document.getElementById("planet-name").innerHTML = "&nbsp;"+response.results[0].name;
          document.getElementById("planet-climate").innerHTML = "&nbsp;"+ response.results[0].climate;
          document.getElementById("planet-terrain").innerHTML = "&nbsp;"+ response.results[0].terrain;
          document.getElementById("planet-population").innerHTML = "&nbsp;"+ response.results[0].population;
        }
        
       
        /* Inserts selected planet detals into game.html */
      });
    
}

document.getElementById("species-btn").addEventListener("click",function(event) {event.preventDefault(); button4()});
/* Adding eventlistener to submit button */

function button4() {
    var input = document.getElementById("species-name-input").value;
    if (input.length <= 0 )
    {
      var error_msg = "Error: Please be more specifc in search";
      document.getElementById("error4").innerHTML = "&nbsp;"+error_msg;
    }
    else
    {
      getspecies(input);
    }
             /* Retrieving user input and calling getspecies function */
    
}


function getspecies(input) {     /* Getspecies function uses SWAPI to retrieve species details */
    
    var settings = {
        "url": "https://swapi.dev/api/species/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        
        if ( response.count === 0 )
        {
          var error_msg = "Error: Please be more specifc in search";
          document.getElementById("error4").innerHTML = "&nbsp;"+error_msg;
          
        }
        else
        {
          document.getElementById("error4").innerHTML = "";
          document.getElementById("species-name").innerHTML = "&nbsp;"+response.results[0].name;
          document.getElementById("species-height").innerHTML = "&nbsp;"+ response.results[0].average_height+"cm";
          document.getElementById("species-lifespan").innerHTML = "&nbsp;"+ response.results[0].average_lifespan+"years";
          var url = response.results[0].homeworld;  /* Inserts selected species detals into game.html */

          var settings = {
            "url": url,
            "method": "GET",      /* Uses SWAPI and a different url to find homeworld/planet */
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response2) {
            console.log(response2);
  
            document.getElementById("species-homeworld").innerHTML = "&nbsp;"+ response2.name;
            /* Inserts homeworld/planet into game.html */
          });
        }
        
        
      });
    
}

document.getElementById("wookie-btn3").addEventListener("click",function(event) {event.preventDefault(); button_wookie3()});

function button_wookie3() {
  var input = document.getElementById("species-name-input").value;
  if (input.length <= 0 )
  {
    var error_msg = "Error: Please be more specifc in search";
    document.getElementById("error3").innerHTML = "&nbsp;"+error_msg;
  }
  else
  {
    getspecies_wookie(input);
  }
             /* Retrieving user input and calling getspecies_wookie function */

}

function getspecies_wookie(input) {     /* getspecies_wookie function uses SWAPI to retrieve character details */
    
  var settings = {
      "url": "https://swapi.dev/api/species/?search="+input,
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      
      if ( response.count === 0 )
      {
        var error_msg = "Error: Please be more specifc in search";
        document.getElementById("error3").innerHTML = "&nbsp;"+error_msg;
        
      }
      else 
      {
        var settings = {
          "url": response.results[0].url+"?format=wookiee",
          "method": "GET",
          "timeout": 0,
        };
        
        $.ajax(settings).done(function (response_wookie) {
          console.log(response_wookie);
          document.getElementById("error3").innerHTML = "";
          document.getElementById("species-name").innerHTML = "&nbsp;" + response_wookie.whrascwo;
          document.getElementById("species-height").innerHTML = "&nbsp;" + response_wookie.rahoworcrarrwo_acwoahrracao+"cm";
          document.getElementById("species-lifespan").innerHTML = "&nbsp;" + response_wookie.rahoworcrarrwo_anahwwwocakrawh+"years";
          
          /* Inserting species details in wookiee in specified search functions */



          var settings = {
            "url": response.results[0].homeworld,  /* Creating another GET request to get homeworld name */
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response_homeworld) {
            console.log(response_homeworld);
            document.getElementById("species-homeworld").innerHTML = "&nbsp;" + response_homeworld.name;
          });
        });

        
      }
      
      
      
    });
  
}

document.getElementById("wookie-btn4").addEventListener("click",function(event) {event.preventDefault(); button_wookie4()});
/* Add eventlistener to wookie-btn4 in game.html */

function button_wookie4() {
  var input = document.getElementById("game-name-input").value;
  if (input.length <= 0 )
  {
    var error_msg = "Error: Please be more specifc in search";
    document.getElementById("error4").innerHTML = "&nbsp;"+error_msg;
  }
  else
  {
    getplanet_wookie(input);
  }
             /* Retrieving user input and calling getplanet_wookie function */

}

function getplanet_wookie(input) {     /* getplanet_wookie function uses SWAPI to retrieve character details */
    
  var settings = {
      "url": "https://swapi.dev/api/planets/?search="+input,
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      
      if ( response.count === 0 )
      {
        var error_msg = "Error: Please be more specifc in search";
        document.getElementById("error4").innerHTML = "&nbsp;"+error_msg;
        
      }
      else 
      {
        var settings = {
          "url": response.results[0].url+"?format=wookiee",
          "method": "GET",
          "timeout": 0,
        };
        
        $.ajax(settings).done(function (response_wookie) {
          console.log(response_wookie);
          
          document.getElementById("planet-name").innerHTML = "&nbsp;" + response_wookie.whrascwo;
          document.getElementById("planet-climate").innerHTML = "&nbsp;" + response_wookie.oaanahscraaowo;
          document.getElementById("planet-terrain").innerHTML = "&nbsp;" + response_wookie.aoworcrcraahwh;
          document.getElementById("planet-population").innerHTML = "&nbsp;" + response_wookie.akooakhuanraaoahoowh;
           /* Inserting planet details in wookiee in specified search functions */


        });
      }
    });
}       