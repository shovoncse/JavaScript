// Init UI object
const ui = new UI;
// Fetch City fromn IP
async function getCity() {
    let data = await (await fetch('https://ipapi.co/json/')).json();
    return data.city; 
}

getCity().then(data => {
    const weather = new Weather(data);
    weather.getWeather()
    .then(data => {
        //console.log(data);
        ui.paint(data);
    })
    .catch(err => ui.notFound(err));
});

document.getElementById('w-change-btn').addEventListener('click', function(){
    const city = document.getElementById('city').value;

    if(city === ''){
        alert('City Name Can\'t Be Empty');
    }else{
    const weather = new Weather(city);
    weather.getWeather()
    .then(data => {
        ui.paint(data);
    })
    .catch(err => ui.notFound(err));
    }
});