import styles from './app.module.scss';
import { clsx } from 'clsx';
import { Schedule } from '../Schedule';
import { Notification } from '../../../app/components/Notification';
import { Loading } from '../../../app/components/Loading';
import { useGetTrash } from '~/shared/hooks/use-get-trash';
import { useGetWeather } from '~/shared/hooks/use-get-weather';

export const App = () => {
	const date = '2025-04-22';
	let trashToCollect: any = null;
	let forecast: any = null;

	const { trashData, trashLoading } = useGetTrash();
	const { weatherData, weatherLoading } = useGetWeather();

	if (trashLoading || weatherLoading) {
		return (
			<div className={clsx(styles['p-home'])}>
				<div className={styles['p-home__container']}>
					<Loading />
				</div>
			</div>
		);
	}
	if (!trashLoading && !weatherLoading) {
		forecast = weatherData.forecast;
		trashToCollect = trashData?.[0];
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
	}
};
