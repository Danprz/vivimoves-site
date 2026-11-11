import type { ImageMetadata } from 'astro';
import yoga from '../assets/entreprises/yoga-01.webp';
import pilates from '../assets/entreprises/pilates-03.webp';
import running from '../assets/entreprises/running-equipe-03.webp';
import gymPosturale from '../assets/entreprises/gym-posturale-01.webp';
import meditation from '../assets/entreprises/meditation-bains-sonores-03.webp';

/** Une pratique proposée en cours réguliers. Les images sont des illustrations générées. */
export interface Activity {
	/** Ancre sur /entreprises/ et valeur `data-slug` du formulaire. */
	slug: string;
	title: string;
	/** Une seule phrase, 110 caractères au plus. */
	line: string;
	image: ImageMetadata;
	alt: string;
}

export const activities: Activity[] = [
	{
		slug: 'yoga',
		title: 'Yoga',
		line: 'Bouger, respirer, faire une vraie pause.',
		image: yoga,
		alt: 'Des collègues pratiquent une posture de yoga debout dans une salle lumineuse.',
	},
	{
		slug: 'pilates',
		title: 'Pilates',
		line: 'Un travail précis : stabilité, contrôle, conscience du corps.',
		image: pilates,
		alt: 'Trois personnes pratiquent un exercice de Pilates assises sur des tapis.',
	},
	{
		slug: 'running-equipe',
		title: 'Running en équipe',
		line: 'Courir ensemble, à allure douce, quel que soit le niveau.',
		image: running,
		alt: 'Quatre collègues courent à allure douce dans un parc, près de leurs bureaux.',
	},
	{
		slug: 'gym-posturale',
		title: 'Gym posturale',
		line: 'Explorer ses gestes et ses postures de travail.',
		image: gymPosturale,
		alt: 'Des collègues assis sur des chaises ouvrent la poitrine, bras écartés, dans un bureau.',
	},
	{
		slug: 'meditation-bains-sonores',
		title: 'Méditation et bains sonores',
		line: 'S’arrêter, écouter, relâcher.',
		image: meditation,
		alt: 'Une main fait résonner un bol chantant devant deux personnes assises, les yeux fermés.',
	},
];
