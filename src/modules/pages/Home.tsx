import styles from '../../modules/app/components/App/app.module.scss';
import { clsx } from 'clsx';
//components
import { Schedule } from '../app/components/Schedule';
import { Notification } from '../app/components/Notification';
import { Loading } from '../app/components/Loading';
//hooks
import { useGetTrash } from '~/shared/hooks/use-get-trash';
import { useGetWeather } from '~/shared/hooks/use-get-weather';
//services
import { Forecast } from '~/shared/services/weather/weather.service.types';
import { trashItem } from '~/shared/services/trash/trash.service.types';

type HomeProps = {
	col: string;
	wea: string;
	iss1: string;
	iss2: string;
};

export const Home = ({ col, wea, iss1, iss2 }: HomeProps) => {
	const date = '2025-04-21';
	let trashToCollect: trashItem | undefined;
	let forecast: Forecast | undefined;
	console.log(col, wea, iss1, iss2);

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
		console.log('weatherData', weatherData);
		forecast = weatherData?.forecast;
		trashToCollect = trashData?.[0];
		return (
			<div className={clsx(styles['p-home'])}>
				<div className={styles['p-home__container']}>
					<Schedule
						trashToCollect={trashToCollect}
						date={date}
						col={col}
					/>
					<Notification
						weather={forecast}
						datum={date}
						trashToCollect={trashToCollect}
						wea={wea}
						iss1={iss1}
						iss2={iss2}
					/>
				</div>
			</div>
		);
	}
};
