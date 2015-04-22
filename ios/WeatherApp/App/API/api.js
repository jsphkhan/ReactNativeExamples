//API Courtesy: OpenWeatherMap - http://openweathermap.org
//Weather Conditions - http://openweathermap.org/weather-conditions

var api = {
	baseUrl: "http://api.openweathermap.org/data/2.5/",
	dailyForecastUrl: "forecast/daily",
	currentWeatherUrl: "weather",
	//url: 'http://localhost:8888/joseph/react-native-try/SampleWeatherApp/response1.json',
	key: '',  //API Key is not required, but recommened by API provider. Put Your API key here
	getDailyForecastUrl: function() {
		return this.baseUrl + this.dailyForecastUrl;
	},
	getCurrentWeatherUrl: function() {
		return this.baseUrl + this.currentWeatherUrl;
		//return this.url;
	}
}

module.exports = api;