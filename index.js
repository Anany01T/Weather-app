const apikey = "314bbd07e3e72341c6eb2590f47520c8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbar = document.querySelector(".search input ")
const searchbtn = document.querySelector(".search button");
const wicon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city +`&appid=${apikey}`);

  if(response.status == 404)
  {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  else
   {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"Km/h";
    console.log(data);

    if(data.weather[0].main == "Clouds"){
      wicon.src = "images/cloud.png";
    }
    else if(data.weather[0].main == "Rain")
    {
      wicon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Clear")
    {
      wicon.src = "images/clear.jpg";
    }
    else if(data.weather[0].main == 'Haze')
    {
      wicon.src = "images/haze.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
}

searchbtn.addEventListener("click",()=>{
  checkWeather(searchbar.value);
})
