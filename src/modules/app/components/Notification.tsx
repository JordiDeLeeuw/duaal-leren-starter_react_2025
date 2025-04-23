import { FC } from 'react';
import { trashNotification } from '~/shared/services/trash/trash.service.types';

export const Notification: FC<trashNotification> = ({
	weather,
	datum,
	trashToCollect,
}) => {
	let issue = '';
	//loop through and give the key to date and the value to the dayData
	for (let [date, dayData] of Object.entries(weather)) {
		if (date === datum) {
			const condition = dayData.condition.text.toLowerCase();

			if (
				condition.includes('rain') &&
				trashToCollect.name === 'Papier'
			) {
				issue = `🌧️ Het kan regenen op ${datum}, zet je afval geen avond ervoor buiten`;
			} else {
				issue = `🌞 It is ${condition} on ${datum}`;
			}
		}
	}
	return (
		<>
			<h2>Weerbericht:</h2>
			<p>{issue}</p>
		</>
	);
};
