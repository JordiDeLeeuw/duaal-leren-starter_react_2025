import { useTranslation } from 'react-i18next';
export const Buttons = () => {
	const { i18n, t } = useTranslation();
	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}
	return (
		<div>
			<button onClick={() => setLanguage('en')}>Engels</button>
			<button onClick={() => setLanguage('nl')}>Nederlands</button>
		</div>
	);
};
