
document.getElementById("btn").addEventListener("click",getpeople);


function getpeople() {
    var settings = {
        "url": "https://swapi.dev/api/people/1/",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
    
        
      });

      var name = document.getElementById("test").innerHTML = response[0].name ;
}



