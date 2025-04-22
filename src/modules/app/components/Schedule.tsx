import { FC } from 'react';
import { trashSchedule } from '~/shared/services/trash/trash.service.types';

export const Schedule: FC<trashSchedule> = ({ trashToCollect, date }) => {
	return (
		<div>
			<h2>Volgende ophaling:</h2>
			<p>{date}</p>
			<p>{trashToCollect.name}</p>
		</div>
	);
};
