import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			collection: 'Next collection',
			weatherMessage: 'Weather Forecast',
			issue1: '🌧️ It might rain on {{date}}, please do not put your waste outside the night before',
			issue2: '🌞 It is {{condition}} on {{date}}',
		},
	},
	nl: {
		translation: {
			collection: 'Volgende ophaling',
			weatherMessage: 'Weerbericht',
			issue1: '🌧️ Het kan regenen op {{date}}, zet je afval geen avond ervoor buiten',
			issue2: ' Het is {{condition}} op {{date}}',
		},
	},
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
		debug: true,
	});

export default i18n;
