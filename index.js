let input = document.querySelector('.cityinput')
let place = document.querySelector('.location')
let tempreature = document.querySelector('.temprature')
let realfeel = document.querySelector('.realfeel')
let Dishumidity = document.querySelector('.humidity')

let min = document.querySelector('.temp_min')
let max = document.querySelector('.temp_max')
let wind = document.querySelector('.wind')
let time = document.querySelector('.time')
let description = document.querySelector('.weatherdescription')
let image = document.querySelector('.img')
let back = document.querySelector('.back')
let imgessss = document.querySelector(".body")
let moreInfoDiv = document.querySelector('.viewMore')
let viewBtn = document.querySelector('.Btn1')
let bar = document.querySelector('.bar')



let natureImg = [{
    url: '393735.jpg',
},
{
    url: '2-nature-wallpaper-grass.jpg'
},
{
    url: '10950083.jpg'
},
{
    url:'tree.jpeg'
},
{
    url:'Green-Grass-Field-Wallpaper.jpg'
}]

let j = 0


    setInterval(() => {
        j++
        if (j == natureImg.length) {
            j = 0
        }
    
        document.body.style.background = `url(${natureImg[j].url}) no-repeat`;
    }, 6000);





let api_key = '86e8db4b3ed405a66cac748899d105ab'


let defaultCity = "chennai"
window.addEventListener('DOMContentLoaded', getWeatherInfo(defaultCity))

input.addEventListener('keyup', (e) => {
    let searchCity = e.target.value
    getWeatherInfo(searchCity)
    console.log(input.value[0]);

})


function getWeatherInfo(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);

            let fetchedTempreature = Math.floor(res.main.temp - 273.15)
            let temp_min = Math.floor(res.main.temp_min - 273.15)
            let temp_max = Math.floor(res.main.temp_max - 273.15)
            let fetchedImg = res.weather[0].icon
            let humidity = res.main.humidity
            let searchPlaceName = res.name
            let countryname = res.sys.country
            let realFeelWeather = Math.floor((res.main.feels_like) - 273.15)
            let windspeed = Math.floor(res.wind.speed * 3.6)
            let weatherDescript = res.weather[0].description


            image.src = `http://openweathermap.org/img/w/${fetchedImg}.png`
            wind.innerHTML = `காற்றின் வேகம்:${windspeed} கி.மீ/மணி`
            realfeel.innerText = `உணரக்கூடிய வெப்பநிலை:${realFeelWeather}°செ`
            Dishumidity.innerText = `ஈரப்பதம்:${humidity}%`
            place.innerHTML = `இடம்:${searchPlaceName},${countryname}.`
            description.innerText = `வானிலை விவரம்:${weatherDescript}`
            tempreature.innerText = `${fetchedTempreature}°செ`
            min.innerHTML = `குறைந்தபட்ச வெப்பநிலை:${temp_min}°செ`
            max.innerHTML = `அதிகபட்ச வெப்பநிலை:${temp_max}°செ`


            switch (weatherDescript) {
                case "scattered clouds":
                    description.innerText = 'சிதறிய மேகங்கள்';
                    break;

                case "few clouds":
                    description.innerText = 'மேகங்கள்';
                    break;

                case "clear sky":
                    description.innerText = 'தெளிந்த வானம்';
                    break;

                case "overcast clouds":
                    description.innerText = 'மேகமூட்டம்';
                    break;

                case "broken clouds":
                    description.innerText = 'உடைந்த மேகங்கள்';
                    break;

                case "light rain":
                    description.innerText = 'தூறல்';
                    break;

                case "moderate rain":
                    description.innerText = 'மிதமான மழை';
                    break;

                case "light intensity drizzle":
                    description.innerText = 'மின்னலுடன் கூடிய தூறல்';
                    break;

                case "haze":
                    description.innerText = 'பனிமூட்டம்';
                    break;

                case "thunderstorm":
                    description.innerText = 'இடியுடன் கூடிய மழை';
                    break;

                case "fog", "mist":
                    description.innerText = 'மூடுபனி';
                    break;

                case "heavy intensity rain":
                    description.innerText = 'கடுமையான மழை';
                    break;

                default:
                    description.innerText = '';
                    break;
            }

        })

}





viewBtn.addEventListener('click', () => {
    viewBtn.style.display = "none"
    moreInfoDiv.style.display = "block"
    bar.style.display = 'block'
})

let closeBtn = document.querySelector('.close').addEventListener('click', () => {
    viewBtn.style.display = "block"
    moreInfoDiv.style.display = "none "
    bar.style.display = 'none'
})


