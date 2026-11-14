/**
 * Avis Google de la fiche « Virginia moves : cours de pilates - mobilité douce ».
 * Textes copiés à l’identique le 2026-11-11 : ne pas reformuler ni corriger.
 * Notes vérifiées le 2026-11-11 : la fiche affiche 5,0 sur 14 avis, ce qui n’est possible
 * que si chaque avis vaut 5 (un seul 4 donnerait 4,9). Revérifier si la moyenne change.
 * Un extrait raccourci est signalé par « […] ». Un seul avis par page.
 */
export type ReviewPage = 'accueil' | 'entreprises' | 'le-pr-club' | 'a-propos';

export interface Review {
	/** Signature publiée, au format « Prénom N. » validé par Virginia. */
	author: string;
	text: string;
	page: ReviewPage;
	/** Note donnée sur Google, vérifiée sur la fiche. Non vérifiée : on l’omet et aucune étoile n’est affichée. */
	rating?: 1 | 2 | 3 | 4 | 5;
}

export const reviews: Review[] = [
	{
		author: 'Thibaut',
		text: 'Virginia est une incroyable coach, professionnelle et sérieuse. Sa pédagogie est basée sur la bienveillance et la bonne humeur, elle sait s\'adapter en fonction de chacun. […]',
		page: 'accueil',
		rating: 5,
	},
	{
		author: 'Françoise T.',
		text: 'Un vrai plaisir de suivre les cours de Virginia : que ce soit du pilate mat, reformer ou renforcement musculaire, c\'est une coach très pédagogue […]',
		page: 'entreprises',
		rating: 5,
	},
	{
		author: 'Yasmina B.',
		text: 'J’ai commencé les séances d’été de pilates et pilates-renforcement musculaire en plein air avec Virginia. Une belle découverte ! […]',
		page: 'le-pr-club',
		rating: 5,
	},
	{
		author: 'Sand',
		text: 'Un vrai bonheur de suivre les cours de Virginia qui nous partage sa passion, et sait être attentive pour chacun d\'entre nous. […]',
		page: 'a-propos',
		rating: 5,
	},
];

export function reviewFor(page: ReviewPage): Review {
	const review = reviews.find((item) => item.page === page);
	if (!review) throw new Error(`Aucun avis prévu pour la page « ${page} ».`);
	return review;
}
