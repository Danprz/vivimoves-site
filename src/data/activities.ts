export interface Activity {
	/** Identifiant utilisé comme ancre sur /entreprises/ et comme valeur du formulaire. */
	slug: string;
	title: string;
	/** Nom court, pour les listes et le formulaire. */
	shortTitle: string;
	/** Une ligne, pour la page d’accueil. */
	teaser: string;
	description: string;
	experience: string;
	situations: string[];
	ctaLabel: string;
}

export const activities: Activity[] = [
	{
		slug: 'eveil-musculaire',
		title: 'Éveil musculaire en entreprise',
		shortTitle: 'Éveil musculaire',
		teaser: 'Se mettre en mouvement avant ou pendant la journée.',
		description:
			'Une mise en route du corps, douce et tonique, pour commencer la journée ou la relancer.',
		experience:
			'Mobilité articulaire, activation progressive, respiration : on délie le corps et on le prépare à la suite, sans chercher la performance.',
		situations: [
			'En début de journée',
			'En ouverture d’un séminaire ou d’une réunion d’équipe',
			'Après un long temps assis',
		],
		ctaLabel: 'Proposer l’éveil musculaire à votre équipe',
	},
	{
		slug: 'yoga',
		title: 'Ateliers de yoga en entreprise',
		shortTitle: 'Yoga',
		teaser: 'Bouger, respirer, faire une pause consciente.',
		description:
			'Du mouvement, du souffle et une vraie pause consciente au cœur de la journée.',
		experience:
			'Des postures enchaînées au rythme de la respiration, puis un temps de retour au calme.',
		situations: [
			'À la pause méridienne',
			'En fin de journée',
			'Comme rendez-vous régulier de l’équipe',
		],
		ctaLabel: 'Proposer le yoga à votre équipe',
	},
	{
		slug: 'pilates',
		title: 'Ateliers de Pilates en entreprise',
		shortTitle: 'Pilates',
		teaser: 'Contrôle du mouvement, stabilité, conscience corporelle.',
		description:
			'Un travail précis et progressif : contrôle du mouvement, stabilité et conscience corporelle.',
		experience:
			'Des exercices lents et guidés pas à pas, où la qualité du geste compte plus que l’intensité.',
		situations: [
			'En cours réguliers, pour installer une pratique',
			'Pour une équipe qui veut progresser ensemble, séance après séance',
		],
		ctaLabel: 'Proposer le Pilates à votre équipe',
	},
	{
		slug: 'gym-posturale',
		title: 'Gym posturale en entreprise',
		shortTitle: 'Gym posturale',
		teaser: 'Explorer ses gestes et ses postures de travail.',
		description:
			'Explorer ses gestes, ses postures et sa mobilité, en lien direct avec la journée de travail.',
		experience:
			'On part des situations réelles — assis, debout, devant l’écran — pour observer ses habitudes et essayer des alternatives simples à refaire seul.',
		situations: [
			'Pour une équipe très sédentaire',
			'Dans une démarche de prévention',
			'En atelier ponctuel, comme « Mon corps au bureau »',
		],
		ctaLabel: 'Proposer la gym posturale à votre équipe',
	},
	{
		slug: 'meditation-bains-sonores',
		title: 'Méditation et bains sonores',
		shortTitle: 'Méditation et bains sonores',
		teaser: 'S’arrêter, écouter, relâcher.',
		description:
			'Une expérience de pause, d’attention et de relaxation, où il n’y a rien à réussir.',
		experience:
			'Un temps d’attention guidée, puis une immersion sonore : on s’installe, on écoute, on laisse le rythme redescendre.',
		situations: [
			'En clôture d’un séminaire ou d’une mini-retraite',
			'Dans une période chargée',
			'Pour un temps collectif au calme',
		],
		ctaLabel: 'Proposer une pause sonore à votre équipe',
	},
];
