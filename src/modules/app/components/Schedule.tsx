import { FC } from 'react';
import i18n from '../../../i18n/i18n.config';
import {
	trashItem,
	trashLanguage,
} from '~/shared/services/trash/trash.service.types';

type ScheduleProps = {
	trashToCollect: trashItem;
	date: string;
	col: string;
};
//const currentLang = i18n.language as trashLanguage;

export const Schedule: FC<ScheduleProps> = ({ trashToCollect, date, col }) => {
	const currentLang = i18n.language as trashLanguage;

	console.log(currentLang);
	console.log(trashToCollect[currentLang]);
	return (
		<div>
			<h2>{col}</h2>
			<p>{date}</p>
			<p>{trashToCollect[currentLang]}</p>
		</div>
	);
};
