/**
 * Cours de Pilates ouverts aux particuliers, affichés sur /le-pr-club/.
 * Seule source des horaires et des lieux publiés : modifier ici puis redéployer.
 * Les heures sont des heures de début. Aucun tarif, aucune place, aucune date ponctuelle.
 */
import { BOOKWHEN_URL, SI_LE_PILATES_URL } from '../consts';

export interface Creneau {
	/** Jours en toutes lettres, en minuscules (« lundi »). */
	jours: string[];
	/** Heures de début au format français (« 19h30 »). */
	heures: string[];
}

export interface Cours {
	/** Ancre de la section sur la page. */
	id: 'pilates-tapis' | 'pilates-reformer';
	titre: string;
	accroche: string;
	lieu: string;
	adresse: { rue: string; ville: string };
	creneaux: Creneau[];
	reservationUrl: string;
	/** Texte du bouton : distinct d’un cours à l’autre, sans nommer l’outil de réservation. */
	reservationLabel: string;
}

export const cours: Cours[] = [
	{
		id: 'pilates-tapis',
		titre: 'Pilates sur tapis',
		accroche:
			'Renforcement profond, mobilité et respiration : un cours collectif au sol, sans machine.',
		lieu: 'Centre Ann Lewis',
		adresse: { rue: '5 rue Alexandre Prachay', ville: '95300 Pontoise' },
		creneaux: [
			{ jours: ['lundi', 'mardi'], heures: ['19h30'] },
		],
		reservationUrl: BOOKWHEN_URL,
		reservationLabel: 'Réserver un cours sur tapis',
	},
	{
		id: 'pilates-reformer',
		titre: 'Pilates Reformer',
		accroche:
			'Le Pilates sur machine : la résistance des ressorts guide le mouvement et intensifie le travail.',
		lieu: 'SI le Pilates',
		adresse: { rue: '24 rue Pierre Butin', ville: '95300 Pontoise' },
		creneaux: [{ jours: ['mardi', 'mercredi', 'jeudi'], heures: ['11h', '12h', '13h'] }],
		reservationUrl: SI_LE_PILATES_URL,
		reservationLabel: 'Réserver un cours Reformer',
	},
];
