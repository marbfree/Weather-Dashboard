let apiKey = 'd9e8fa6428a49966fe0b0aa58e369bf7'
// let cityNameVal = document.querySelector("input").value
// console.log(cityNameVal);
var submitButton = document.querySelector(".btn");

// add function to get input to add to api



function getApi(){
    let cityNameVal = document.querySelector("input").value;
    console.log(cityNameVal);

   let getCity = localStorage.setItem("cityName", cityNameVal);
    console.log(getCity);

    // let cityArr = document.location.search.split('&');
    // console.log(cityArr);

    // let city = cityArr[0].split('=').pop();

    // searchApi(city);
    // console.log(searchApi);

function searchApi(city){

        let requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7`
        
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            for (let i = 0; i < data.length; i++){
              let cityDaily = document.querySelector("#currentCity");
              let lonDaily = document.querySelector("#currentLongitude");
              let latDaily = document.querySelector("#currentLatitude");
              cityDaily.textContent = data[i].name;
              lonDaily.textContent = data[i].coord;
              latDaily.textContent = data[i].main;
            console.log(data[i]);
            console.log(data[i]);}
        });  
};
}

submitButton.addEventListener("click", getApi);


// get value from input
// pass value to url
// get lat/long from query
// resubmit using lat/long to get 5 day forcast