import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const App = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === '/') {
			navigate('/home');
		}
	});
	return <Outlet />;
};

