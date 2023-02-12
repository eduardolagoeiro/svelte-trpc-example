// lib/trpc/router.ts
import type { Context } from '$lib/trpc/context';
import { prisma } from '$lib/db';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	greeting: t.procedure.query(async () => {
		const count = await prisma.card.count();
		return {
			msg: `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`,
			count,
			newValue: 'new-value'
		};
	}),
	getCards: t.procedure.query(async () => {
		return {
			cards: await prisma.card.findMany()
		};
	})
});

export type Router = typeof router;
