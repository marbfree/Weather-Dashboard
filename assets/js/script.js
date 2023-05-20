let apiKey = 'd9e8fa6428a49966fe0b0aa58e369bf7'
let cityNameVal = document.querySelector("input").value
var submitButton = document.querySelector(".btn");

function getApi(){
    let requestUrl = "http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid=d9e8fa6428a49966fe0b0aa58e369bf7"

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
        });  
};


submitButton.addEventListener("click", getApi);
   