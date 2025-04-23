import { useQuery } from '@tanstack/react-query';
import { trashService } from '~/shared/services/trash/trash.service';

export const useGetTrash = () => {
	const { data: trashData, isLoading: trashLoading } = useQuery({
		queryKey: ['trash'],
		queryFn: trashService.getTrashItems,
	});

	return { trashData, trashLoading };
};
