export interface ApiWeather {
	location: Location;
	current: Current;
	forecast: Forecast;
}
interface Location {
	name: string;
	region: string;
	country: string;
	lat: number;
	lon: number;
	timezone_id: string;
	localtime: string;
}

interface Current {
	termperature: number;
	feels_like: number;
	weather_descriptions: [string];
	weather_icons: [string];
	wind_speed: number;
	wind_dir: string;
	humidity: number;
	cloudcover: number;
	uv_index: number;
	visibility: number;
	pressure: number;
	is_day: number;
}

export interface Forecast {
	[key: string]: {
		maxtemp: number;
		mintemp: number;
		avgtemp: number;
		sunrise: string;
		sunset: string;
		chance_of_rain: number;
		total_precip_mm: number;
		condition: {
			text: string;
			icon: string;
		};
		hourly: [
			{
				time: string;
				temp: number;
				condition: string;
			},
		];
	};
}
