import { Forecast } from '../weather/weather.service.types';

export interface trashItem {
	id: string;
	name: string;
}

export interface trashSchedule {
	trashToCollect: trashItem;
	date: string;
}

export interface trashNotification {
	weather: Forecast;
	datum: string;
	trashToCollect: trashItem;
}
