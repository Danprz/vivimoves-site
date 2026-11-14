/**
 * Chiffres de contexte du premier bloc de /entreprises/.
 * Chaque chiffre a été vérifié dans sa publication d’origine le 2026-11-11 :
 * aucun chiffre sans source, aucun montant en euros, aucun résultat attribué à Bliss.
 */
export interface KeyFigure {
	value: string;
	text: string;
	source: string;
	sourceUrl: string;
}

export const figures: KeyFigure[] = [
	{
		value: '95 %',
		text: 'des adultes sont exposés à un risque pour leur santé, par manque d’activité physique ou par un temps trop long passé assis.',
		source: 'Anses, 2022',
		sourceUrl: 'https://www.anses.fr/fr/content/etre-actif-ca-sapprend',
	},
	{
		value: '88 %',
		text: 'des maladies professionnelles reconnues sont des troubles musculo-squelettiques.',
		source: 'Santé publique France, d’après l’Assurance Maladie (données 2019)',
		sourceUrl:
			'https://www.santepubliquefrance.fr/les-actualites/troubles-musculo-squelettiques-en-france-ou-en-est',
	},
	{
		value: '6 à 9 %',
		text: 'de productivité en plus, possible pour un salarié sédentaire qui se met à pratiquer une activité physique régulière, selon l’étude.',
		source: 'Étude Goodwill pour le MEDEF, le CNOSF et AG2R La Mondiale, 2015',
		sourceUrl:
			'https://www.medef.com/communiques-de-presse-download/le-medef-le-cnosf-et-ag2r-la-mondiale-devoilent-la-premiere-etude-sur-l-impact-economique-de-l-activite-physique-et-sportive-sur-l-entreprise-le-salarie-et-la-societe',
	},
];
