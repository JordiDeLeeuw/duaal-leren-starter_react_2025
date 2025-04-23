import weatherMock from '~/shared/mock/weather.json';

class WeatherService {
	async getWeather() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(weatherMock);
			}, 1000);
		});
	}
}
export const weatherService = new WeatherService();
