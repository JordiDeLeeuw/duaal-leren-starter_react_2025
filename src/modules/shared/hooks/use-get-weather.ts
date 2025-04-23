import { useQuery } from '@tanstack/react-query';
import { weatherService } from '~/shared/services/weather/weather.service';

export const useGetWeather = () => {
	const { data: weatherData, isLoading: weatherLoading } = useQuery({
		queryKey: ['weather'],
		queryFn: weatherService.getWeather,
	});

	return { weatherData, weatherLoading };
};
