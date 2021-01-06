document.getElementById("btn").addEventListener("click",function(event) {event.preventDefault(); button()});

function button() {
    var input = document.getElementById("name-input").value;
    getpeople(input);
    
}


function getpeople(input) {
    
    var settings = {
        "url": "https://swapi.dev/api/people/?search="+input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
    
        var name = document.getElementById("name").innerHTML = response.results[0].name;
        var height = document.getElementById("height").innerHTML = response.results[0].height+"cm";
        var weight = document.getElementById("weight").innerHTML = response.results[0].mass+"kg";
        var hair_colour = document.getElementById("hair-colour").innerHTML = response.results[0].hair_color;
        var birth_year = document.getElementById("birth-year").innerHTML = response.results[0].birth_year;

      });
    
}






