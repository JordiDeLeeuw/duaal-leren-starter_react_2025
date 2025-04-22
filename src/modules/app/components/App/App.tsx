import styles from './app.module.scss';
import { clsx } from 'clsx';
import { trashService } from '~/shared/services';
import { weatherService } from '~/shared/services';
import { Schedule } from '../Schedule';
import { Notification } from '../../../app/components/Notification';

export const App = () => {
	let forecast = {};
	// YOUR TRASH
	const trashItems = trashService.getTrashItems();
	// get name of the first trash item
	const trashToCollect = trashItems[0];
	// get weather data
	weatherService.getWeather().then((data) => {
		//pull out the forecast data
		forecast = data.forecast;
	});

	// set date of the next collection
	const date = '2025-04-22';

	return (
		<div className={clsx(styles['p-home'])}>
			<div className={styles['p-home__container']}>
				<Schedule trashToCollect={trashToCollect} date={date} />
				<Notification
					weather={forecast}
					datum={date}
					trashToCollect={trashToCollect}
				/>
			</div>
		</div>
	);
};
