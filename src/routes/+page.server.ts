import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		hello: 'Olá',
		greeting: router.createCaller(await createContext(event)).greeting(),
		cards: router.createCaller(await createContext(event)).getCards()
	};
};
