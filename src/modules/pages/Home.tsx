import styles from '../../modules/app/components/App/app.module.scss';
import { clsx } from 'clsx';
import { Trans, useTranslation } from 'react-i18next';
import { markers } from '../../i18n/markers';
//components
import { Schedule } from '../app/components/Schedule';
import { Notification } from '../app/components/Notification';
import { Loading } from '../app/components/Loading';
import { Header } from '../app/components/Header';
//hooks
import { useGetTrash } from '~/shared/hooks/use-get-trash';
import { useGetWeather } from '~/shared/hooks/use-get-weather';
import { useGetLanguage } from '~/shared/hooks/use-get-language';
//services
import { Forecast } from '~/shared/services/weather/weather.service.types';
import { trashItem } from '~/shared/services/trash/trash.service.types';
import { useState } from 'react';
type HomeProps = {
	col: string;
	wea: string;
	iss1: string;
	iss2: string;
};
export const Home = ({ col, wea, iss1, iss2 }: HomeProps) => {
	const { i18n } = useTranslation();
	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}
	const [date, setDate] = useState('2025-04-21');
	function changeDate() {
		const forecastDates = Object.keys(weatherData?.forecast);
		const currentIndex = forecastDates.indexOf(date);
		const nextIndex = (currentIndex + 1) % forecastDates.length;
		setDate(forecastDates[nextIndex]);
	}

	let trashToCollect: trashItem | undefined;
	let forecast: Forecast | undefined;
	const { trashData, trashLoading } = useGetTrash();
	const { weatherData, weatherLoading } = useGetWeather();
	if (trashLoading || weatherLoading) {
		return (
			<div className={clsx(styles['p-home'])}>
				<div className={styles['p-home__container']}>
					<Header />
					<Loading />
				</div>
			</div>
		);
	}
	if (!trashLoading && !weatherLoading) {
		forecast = weatherData?.forecast;
		trashToCollect = trashData?.[0];
		return (
			<div className={clsx(styles['p-home'])}>
				<div className={styles['p-home__container']}>
					<div className={styles['p-home__langbuttons']}>
						<button
							className={styles['p-home__buttons__langbutton']}
							onClick={() => setLanguage('en')}
						>
							<Trans>{markers.lan1}</Trans>
						</button>
						<button
							className={styles['p-home__buttons__langbutton']}
							onClick={() => setLanguage('nl')}
						>
							<Trans>{markers.lan2}</Trans>
						</button>
					</div>
					<Header />
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
					<button
						className={styles['p-home__buttons__datebutton']}
						onClick={() => changeDate()}
					>
						<Trans>{markers.cd}</Trans>
					</button>
				</div>
			</div>
		);
	}
};
