class Weather {
    constructor(city){
        this.city = city;
        this.appid = 'bd10046a88c7d5c3a2af42bba2e0df7e';
    }

    // Fetch Weather fromn API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`);
        const resData = await response.json();
        return resData;
    }

    
}