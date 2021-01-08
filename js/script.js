
document.getElementById("btn").addEventListener("click",function(event) {event.preventDefault(); button()});
/* Adding eventlistener to submit button */


function button() {
    var input = document.getElementById("name-input").value;
    getpeople(input);           /* Retrieving user input and calling getpeople function */

}


function getpeople(input) {     /* Getpeople function uses SWAPI to retrieve character details */
    
    var settings = {
        "url": "https://swapi.dev/api/people/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
    
        var name = document.getElementById("name").innerHTML = "&nbsp;"+ response.results[0].name;
        var height = document.getElementById("height").innerHTML = "&nbsp;"+response.results[0].height+"cm";
        var weight = document.getElementById("weight").innerHTML = "&nbsp;"+response.results[0].mass+"kg";
        var hair_colour = document.getElementById("hair-colour").innerHTML = "&nbsp;"+response.results[0].hair_color;
        var birth_year = document.getElementById("birth-year").innerHTML = "&nbsp;"+response.results[0].birth_year;
        /* Inserts selected character detals into index.html */
      });
    
}

document.getElementById("btn2").addEventListener("click",function(event) {event.preventDefault(); button2()});
/* Adding eventlistener to submit button */


function button2() {
    var input = document.getElementById("starship-input").value;
    getstarship(input);       /* Retrieving user input and calling getstarship function */
    
}


function getstarship(input) {  /* Getstarship function uses SWAPI to retrieve starship details */
    
    var settings = {      
        "url": "https://swapi.dev/api/starships/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);

        var model = document.getElementById("model").innerHTML = "&nbsp;"+response.results[0].model;
        var manufacturer = document.getElementById("manufacturer").innerHTML = "&nbsp;"+response.results[0].manufacturer;
        var manufacturer = document.getElementById("cost").innerHTML = "&nbsp;"+response.results[0].cost_in_credits+"Credits";
        var crew = document.getElementById("crew").innerHTML = "&nbsp;"+response.results[0].crew;
        var hyperdrive = document.getElementById("hyperdrive").innerHTML ="&nbsp;"+ response.results[0].hyperdrive_rating;
        /* Inserts selected starship detals into index.html */
      });
    
}



