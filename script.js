


const apiKey = "1f3eb26afb7b48e4c39b65e542f47e9b";
const apiUrl= " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon  = document.querySelector(".icon");

async function checkWheather(city){
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(responce.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await responce.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round( data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/clouds.png"
        }
        else if(data.weather[0].main == "Clouds"){
           weatherIcon.src = "Images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/clear.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/drizzle.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/rain.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/mist.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "Images/snow.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }
    
   
    
}

searchBtn.addEventListener('click', ()=>{
    checkWheather(searchBox.value);

})




