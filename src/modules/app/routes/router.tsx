import { createBrowserRouter } from 'react-router';
import { App } from '../components/App/App';
import { Home } from '../../../../src/modules/pages/Home';
import { markers } from '../../../i18n/markers';
import { Navigation } from '../../../modules/app/components/navigation';

//the router setup/
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/home',
				element: (
					<Home
						col={markers.collection}
						wea={markers.weatherMessage}
						iss1={markers.issue1}
						iss2={markers.issue2}
					/>
				),
			},
			{
				path: '/nav',
				element: <Navigation />,
			},
		],
	},
]);
