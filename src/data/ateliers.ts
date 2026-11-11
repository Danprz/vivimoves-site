/**
 * Fiche pratique d’un atelier. Chaque valeur doit avoir été validée par Virginia ;
 * une valeur absente n’est pas affichée.
 */
export interface AtelierFacts {
	duree?: string;
	format?: string;
	lieu?: string;
}

export interface Atelier {
	/** Ancre sur /entreprises/ et valeur `data-slug` du formulaire. */
	slug: string;
	/** Titre sans guillemets ; les guillemets sont ajoutés à l’affichage. */
	title: string;
	pitch: string;
	themes: string[];
	facts: AtelierFacts;
}

// Validé par Virginia le 2026-11-11 pour les trois ateliers.
const facts: AtelierFacts = {
	duree: '1 h à 1 h 30',
	format: 'Atelier collectif',
	lieu: 'Dans vos locaux',
};

export const ateliers: Atelier[] = [
	{
		slug: 'atelier-mouvement',
		title: 'Mon corps au bureau',
		pitch:
			'Comprendre ce que la journée de travail demande au corps et repartir avec des gestes simples à refaire seul.',
		themes: [
			'S’installer à son poste : assise, écran, appuis',
			'Des pauses actives de cinq minutes, sans matériel',
			'Mobilité de la nuque, des épaules et du dos',
			'Respirer pour relâcher les tensions',
			'Construire sa routine de la semaine',
		],
		facts,
	},
	{
		slug: 'atelier-nutrition',
		title: 'Mieux manger au travail',
		pitch:
			'Des repères concrets pour composer ses repas et garder de l’énergie tout au long de la journée.',
		themes: [
			'Composer une pause déjeuner équilibrée',
			'Collations et hydratation au bureau',
			'Traverser le creux de l’après-midi',
			'S’organiser quand le temps manque',
			'Manger en déplacement ou en télétravail',
		],
		facts,
	},
	{
		slug: 'atelier-sommeil',
		title: 'Mieux dormir, mieux récupérer',
		pitch:
			'Comprendre son sommeil et installer des habitudes qui aident à récupérer, sans recette miracle.',
		themes: [
			'Les rythmes du sommeil, simplement',
			'Préparer sa soirée : lumière, écrans, déconnexion',
			'Respiration et relaxation pour ralentir',
			'La place du mouvement dans la journée',
			'Micro-pauses et récupération au travail',
		],
		facts,
	},
];
