/* Utility properties and methods */
var Utils = {
	days: {
		"0":"Sun",
		"1":"Mon",
		"2":"Tue",
		"3":"Wed",
		"4":"Thu",
		"5":"Fri",
		"6":"Sat"
	},
	months: {
		"0":"Jan",
		"1":"Feb",
		"2":"Mar",
		"3":"Apr",
		"4":"May",
		"5":"Jun",
		"6":"Jul",
		"7":"Aug",
		"8":"Sep",
		"9":"Oct",
		"10":"Nov",
		"11":"Dec"
	},
	convertToCelcius: function(tempKelvin) {
		return (tempKelvin - 273.15).toFixed(1);
	},
	getIconUrl: function(icon) {
		//icon .pngs placed in github io repo
		return "http://jsphkhan.github.io/ReactNativeWeatherApp/assets/icons/" + icon + ".png";
	}
};

module.exports = Utils;
