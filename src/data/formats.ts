export interface Format {
	title: string;
	text: string;
}

export const formats: Format[] = [
	{
		title: 'Cours réguliers',
		text: 'Un rendez-vous récurrent pour installer une pratique : Pilates, yoga, renforcement musculaire ou bains sonores.',
	},
	{
		title: 'Ateliers ponctuels de bien-être et de prévention',
		text: 'Un temps fort autour d’un thème, par exemple « Mon corps au bureau », « Running en équipe » ou « Mieux manger au travail ».',
	},
	{
		title: 'Mini-retraites d’équipe',
		text: 'Une journée ou une demi-journée pour ralentir, bouger et se retrouver.',
	},
];
