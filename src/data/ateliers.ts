import type { ImageMetadata } from 'astro';
import corpsAuBureau from '../assets/entreprises/atelier-mon-corps-au-bureau.webp';
import mieuxManger from '../assets/entreprises/atelier-mieux-manger-au-travail.webp';
import mieuxDormir from '../assets/entreprises/atelier-mieux-dormir-recuperer.webp';

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
	/** Illustration générée, sans personnes. */
	image: ImageMetadata;
	alt: string;
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
		image: corpsAuBureau,
		alt: 'Poste de travail avec chaise réglable, écran surélevé et repose-pieds, près d’une fenêtre.',
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
		image: mieuxManger,
		alt: 'Déjeuner préparé sur un bureau : quinoa, pois chiches et légumes, avec une pomme, des noix et de l’eau.',
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
		image: mieuxDormir,
		alt: 'Table de chevet avec lampe douce, masque de nuit posé sur un livre fermé et téléphone retourné.',
	},
];
