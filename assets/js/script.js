let apiKey = 'd9e8fa6428a49966fe0b0aa58e369bf7'
var submitButton = document.querySelector(".btn");

function getApi(){
    // get value from input
    let cityNameVal = document.querySelector("input").value;
    console.log(cityNameVal);
    // set value to local storage
    let getCity = localStorage.setItem("cityName", cityNameVal);
    console.log(getCity);
    searchApi(cityNameVal);
};


//    get latitude and longitude from api call
    
  function searchApi(cityNameVal){
        console.log(cityNameVal);  

    let requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=` + cityNameVal + `&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7`
    
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
            for (let i = 0; i < data.length; i++){
              let cityDaily = document.querySelector("#currentCity");
              let lonDaily = data[i].lon;
              let latDaily = data[i].lat;
              cityDaily.textContent = data[i].name;
            // console.log(data[i]);
            // console.log(lonDaily);
            // console.log(latDaily);
            localStorage.setItem("latitude", latDaily);
            localStorage.setItem("longitude", lonDaily);
        
        
        
        
    

    let requestUrlLatLon = `https://api.openweathermap.org/data/2.5/weather?lat=` + latDaily + `&lon=` + lonDaily + `&appid=d9e8fa6428a49966fe0b0aa58e369bf7`

    fetch(requestUrlLatLon)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
        })

 } })};  


submitButton.addEventListener("click", getApi);


// pass value to url
// get lat/long from query
// resubmit using lat/long to get 5 day forcast