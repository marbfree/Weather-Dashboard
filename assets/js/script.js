let apiKey = 'd9e8fa6428a49966fe0b0aa58e369bf7'
let cityNameVal = document.querySelector("input").value
var submitButton = document.querySelector(".btn");

// add function to get input (city) to add to api

function getApi(){
    // let requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7"
        let requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Atlanta&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7"
        // let requestUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=d9e8fa6428a49966fe0b0aa58e369bf7"

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            for (let i = 0; i < data.length; i++){
              let cityDaily = document.getElementById("daily");
              cityDaily.textContent = data[i].name;
            console.log(data[i]);
            console.log(data[i]);}
        });  
};

// function getApi(){
//     // let requestUrl = "http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7"
//         let requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Atlanta&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7"

//     fetch(requestUrl)
//         .then(function (response){
//             return response.json();
//         })
//         .then(function (data){
//             for (let i = 0; i < data.length; i++){
//             console.log(data[i].lat);
//             console.log(data[i].lon);}
//         });  
// };


submitButton.addEventListener("click", getApi);
   