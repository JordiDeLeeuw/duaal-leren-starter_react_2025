import { Home } from '../../../pages/Home';
import { useTranslation } from 'react-i18next';
import { markers } from '../../../../i18n/markers';

export const App = () => {
	const { i18n, t } = useTranslation();
	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}
	return (
		<>
			<Home 
				col={t(markers.collection)} 
				wea={t(markers.weatherMessage)} 
				iss1={markers.issue1} 
				iss2={markers.issue2}  />
			<button onClick={() => setLanguage('en')}>Engels</button>
			<button onClick={() => setLanguage('nl')}>Nederlands</button>
		</>
	);
};

