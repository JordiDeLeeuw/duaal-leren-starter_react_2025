import { TRASH_MOCK } from '~/shared/mock/trash.ts';
import { trashItem } from '~/shared/services/trash/trash.service.types.ts';

class TrashService {
	getTrashItems(): Promise<trashItem[]> {
		return new Promise<trashItem[]>((resolve) => {
			setTimeout(() => {
				resolve(TRASH_MOCK);
			}, 6000);
		});
	}
}

export const trashService = new TrashService();
