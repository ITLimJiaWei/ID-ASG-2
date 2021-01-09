
document.getElementById("btn").addEventListener("click",function(event) {event.preventDefault(); button()});
/* Adding eventlistener to submit button */


function button() {
    var input = document.getElementById("name-input").value;
    if (input.length <= 0 )
    {
      var error_msg = "Error: Please be more specifc in search";
      document.getElementById("error1").innerHTML = "&nbsp;"+error_msg;
    }
    else
    {
      getpeople(input);
    }
               /* Retrieving user input and calling getpeople function */

}


function getpeople(input) {     /* Getpeople function uses SWAPI to retrieve character details */
    
    var settings = {
        "url": "https://swapi.dev/api/people/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        
        if ( response.count === 0 )
        {
          var error_msg = "Error: Please be more specifc in search";
          document.getElementById("error1").innerHTML = "&nbsp;"+error_msg;
          
        }
        else 
        {
          document.getElementById("error1").innerHTML = "";
          document.getElementById("name").innerHTML = "&nbsp;"+ response.results[0].name;
          document.getElementById("height").innerHTML = "&nbsp;"+response.results[0].height+"cm";
          document.getElementById("weight").innerHTML = "&nbsp;"+response.results[0].mass+"kg";
          var url2 = response.results[0].homeworld;
          document.getElementById("birth-year").innerHTML = "&nbsp;"+response.results[0].birth_year;

          var settings = {
            "url": url2,
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response2) {
            
            document.getElementById("homeworld").innerHTML = "&nbsp;"+response2.name;
          });
        }
        
        
        /* Inserts selected character detals into index.html */
      });
    
}

document.getElementById("btn2").addEventListener("click",function(event) {event.preventDefault(); button2()});
/* Adding eventlistener to submit button */


function button2() {
    var input = document.getElementById("starship-input").value;
    if (input.length <= 0 )
    {
      var error_msg = "Error: Please be more specifc in search";
      document.getElementById("error2").innerHTML = "&nbsp;"+error_msg;
    }
    else
    {
      getstarship(input); /* Retrieving user input and calling getstarship function */
    }
           
    
}


function getstarship(input) {  /* Getstarship function uses SWAPI to retrieve starship details */
    
    var settings = {      
        "url": "https://swapi.dev/api/starships/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        
        if ( response.count === 0 )
        {
          var error_msg = "Error: Please be more specifc in search";
          document.getElementById("error2").innerHTML = "&nbsp;"+error_msg;
        }
        else
        { 
          document.getElementById("error2").innerHTML = "";
          document.getElementById("model").innerHTML = "&nbsp;"+response.results[0].model;
          document.getElementById("manufacturer").innerHTML = "&nbsp;"+response.results[0].manufacturer;
          document.getElementById("cost").innerHTML = "&nbsp;"+response.results[0].cost_in_credits+"Credits";
          document.getElementById("crew").innerHTML = "&nbsp;"+response.results[0].crew;
          document.getElementById("hyperdrive").innerHTML ="&nbsp;"+ response.results[0].hyperdrive_rating;
        }
        
        /* Inserts selected starship detals into index.html */
      });
    
}

  /* BELOW IS WOOKIE VARIATION OF ABOVE FUNCTIONS */
 
document.getElementById("wookie-btn").addEventListener("click",function(event) {event.preventDefault(); button_wookie()});

function button_wookie() {
  var input = document.getElementById("name-input").value;
  if (input.length <= 0 )
  {
    var error_msg = "Error: Please be more specifc in search";
    document.getElementById("error1").innerHTML = "&nbsp;"+error_msg;
  }
  else
  {
    getpeople_wookie(input);
  }
             /* Retrieving user input and calling getpeople_wookie function */

}

function getpeople_wookie(input) {     /* Getpeople_wookie function uses SWAPI to retrieve character details */
    
  var settings = {
      "url": "https://swapi.dev/api/people/?search="+input,
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      
      if ( response.count === 0 )
      {
        var error_msg = "Error: Please be more specifc in search";
        document.getElementById("error1").innerHTML = "&nbsp;"+error_msg;
        
      }
      else 
      {
        var settings = {
          "url": response.results[0].url+"?format=wookiee", /* Appending ?format=wookiee to enable wookiee language  */
          "method": "GET",
          "timeout": 0,
        };
        
        $.ajax(settings).done(function (response_wookie) {
          console.log(response_wookie);
          
          document.getElementById("name").innerHTML = "&nbsp;" + response_wookie.whrascwo;
          document.getElementById("height").innerHTML = "&nbsp;" + response_wookie.acwoahrracao+"cm";
          document.getElementById("weight").innerHTML = "&nbsp;" + response_wookie.scracc+"kg";
          document.getElementById("birth-year").innerHTML = "&nbsp;" + response_wookie.rhahrcaoac_roworarc;




          var settings = {
            "url": response.results[0].homeworld, /* Makes another GET request to retrive homeworld name */
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response_homeworld) {
            console.log(response_homeworld);
            document.getElementById("homeworld").innerHTML = "&nbsp;" + response_homeworld.name;
          });
        });

        
      }
      
      
      
    });
  
}

document.getElementById("wookie-btn2").addEventListener("click",function(event) {event.preventDefault(); button_wookie2()});

function button_wookie2() {
  var input = document.getElementById("starship-input").value;
  if (input.length <= 0 )
  {
    var error_msg = "Error: Please be more specifc in search";
    document.getElementById("error2").innerHTML = "&nbsp;"+error_msg;
  }
  else
  {
    getstarship_wookie(input);
  }
             /* Retrieving user input and calling getstarship_wookie function */

}

function getstarship_wookie(input) {     /* getstarship_wookie function uses SWAPI to retrieve character details */
    
  var settings = {
      "url": "https://swapi.dev/api/starships/?search="+input,
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      
      if ( response.count === 0 )
      {
        var error_msg = "Error: Please be more specifc in search";
        document.getElementById("error1").innerHTML = "&nbsp;"+error_msg;
        
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
          
          document.getElementById("model").innerHTML = "&nbsp;" + response_wookie.scoowawoan;
          document.getElementById("manufacturer").innerHTML = "&nbsp;" + response_wookie.scrawhhuwwraoaaohurcworc;
          document.getElementById("cost").innerHTML = "&nbsp;" + response_wookie.oaoocao_ahwh_oarcwowaahaoc;
          document.getElementById("crew").innerHTML = "&nbsp;" + response_wookie.oarcwooh;
          document.getElementById("hyperdrive").innerHTML = "&nbsp;" + response_wookie.acroakworcwarcahhowo_rcraaoahwhrr;

        });
      }
    });
}