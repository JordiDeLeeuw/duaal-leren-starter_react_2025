import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from '~/app/components';

import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Root />
	</StrictMode>,
);
