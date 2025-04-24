import { Forecast } from '../weather/weather.service.types';

export interface trashItem {
	id: string;
	nl: string;
	en: string;
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
type extractLanguage<interfaceType> = keyof interfaceType;

export type trashLanguage = extractLanguage<Omit<trashItem, 'id'>>;


