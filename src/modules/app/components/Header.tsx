import { clsx } from 'clsx';
import styles from '../../app/components/App/app.module.scss';
import { Trans } from 'react-i18next';
import { markers } from '../../../i18n/markers';

export const Header = () => {
	return (
		<h1 id="home" className={clsx(styles['p-home__container__title'])}>
			<Trans>{markers.title}</Trans>
		</h1>
	);
};
