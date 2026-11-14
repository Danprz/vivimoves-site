import type { ImageMetadata } from 'astro';
import coursReguliers from '../assets/entreprises/format-cours-reguliers-01.webp';
import ateliers from '../assets/entreprises/format-ateliers-salle-reunion.webp';
import miniRetraites from '../assets/entreprises/format-mini-retraites-ferme.webp';

/** Un format d’intervention. Les images sont des illustrations générées, sans personnes. */
export interface Format {
	/** Ancre de la section correspondante sur /entreprises/. */
	slug: 'cours-reguliers' | 'ateliers' | 'mini-retraites';
	title: string;
	text: string;
	image: ImageMetadata;
	alt: string;
}

export const formats: Format[] = [
	{
		slug: 'cours-reguliers',
		title: 'Cours réguliers',
		text: 'Un rendez-vous récurrent pour installer une pratique : yoga, Pilates, running, gym posturale ou bains sonores.',
		image: coursReguliers,
		alt: 'Tapis de mouvement et briques en liège préparés pour un cours dans une salle de bureaux lumineuse.',
	},
	{
		slug: 'ateliers',
		title: 'Ateliers ponctuels de bien-être et de prévention',
		text: 'Un temps fort autour d’un thème : le corps au bureau, l’alimentation ou le sommeil.',
		image: ateliers,
		alt: 'Salle de réunion lumineuse préparée pour un atelier, avec table, chaises, carafe d’eau et carnets.',
	},
	{
		slug: 'mini-retraites',
		title: 'Mini-retraites d’équipe',
		text: 'Une journée ou une demi-journée pour ralentir, bouger et se retrouver.',
		image: miniRetraites,
		alt: 'Tapis de mouvement au sol dans la cour extérieure d’une ferme, prêts pour une mini-retraite d’équipe.',
	},
];
