var input = "people/3/"
document.getElementById("btn").addEventListener("click",getpeople(input));


function getpeople(input) {
    
    var settings = {
        "url": "https://swapi.dev/api/" + input,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
    
        var name = document.getElementById("test").innerHTML = response.name;
      });

      
}



