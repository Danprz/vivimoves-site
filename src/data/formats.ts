export interface Format {
	/** Ancre de la section correspondante sur /entreprises/. */
	slug: 'cours-reguliers' | 'ateliers' | 'mini-retraites';
	title: string;
	text: string;
}

export const formats: Format[] = [
	{
		slug: 'cours-reguliers',
		title: 'Cours réguliers',
		text: 'Un rendez-vous récurrent pour installer une pratique : yoga, Pilates, running, gym posturale ou bains sonores.',
	},
	{
		slug: 'ateliers',
		title: 'Ateliers ponctuels de bien-être et de prévention',
		text: 'Un temps fort autour d’un thème : le corps au bureau, l’alimentation ou le sommeil.',
	},
	{
		slug: 'mini-retraites',
		title: 'Mini-retraites d’équipe',
		text: 'Une journée ou une demi-journée pour ralentir, bouger et se retrouver.',
	},
];
