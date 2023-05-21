let apiKey = 'd9e8fa6428a49966fe0b0aa58e369bf7'
let cityNameVal = document.querySelector("input").value
var submitButton = document.querySelector(".btn");

function getApi(){
    // let requestUrl = "http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7"
        let requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Atlanta&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7"

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            for (let i = 0; i < data.length; i++){
            console.log(data[i].lat);}
        });  
};


submitButton.addEventListener("click", getApi);
   