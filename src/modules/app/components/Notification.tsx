import { FC } from 'react';
import { t } from 'i18next';
import i18n from '../../../i18n/i18n.config';
import {
	trashLanguage,
	trashNotification,
} from '~/shared/services/trash/trash.service.types';

type NotificationProps = trashNotification & {
	wea: string;
	iss1: string;
	iss2: string;
};

export const Notification = ({
	weather,
	datum,
	trashToCollect,
	wea,
	iss1,
	iss2,
}: NotificationProps) => {
	const currentLang = i18n.language as trashLanguage;

	let issue = '';
	//loop through and give the key to date and the value to the dayData
	for (let [date, dayData] of Object.entries(weather)) {
		if (date === datum) {
			const condition = dayData.condition[currentLang].toLowerCase();
			if (
				condition.includes('rain') &&
				(trashToCollect[currentLang] === 'Papier' ||
					trashToCollect[currentLang] === 'Paper')
			) {
				issue = t(iss1, { date: datum });
			} else {
				issue = t(iss2, { condition: condition, date: datum });
			}
		}
	}
	return (
		<>
			<h2>{wea}</h2>
			<p>{issue}</p>
		</>
	);
};
