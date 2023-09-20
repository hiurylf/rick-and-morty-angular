export interface ICharacter {
	id: number;
	name: string;
	status: ICharacterStatus;
	species: string;
	gender: ICharacterGender;
	image: string;
	created: Date;
}

export type ICharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export type ICharacterStatus = 'Alive' | 'Dead' | 'unknown';
