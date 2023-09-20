import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICharacterGender } from '@interfaces/character';
import { MatChipsModule } from '@angular/material/chips';

@Component({
	selector: 'app-gender',
	standalone: true,
	imports: [CommonModule, MatChipsModule],
	templateUrl: 'gender.component.html',
	styleUrls: ['gender.component.scss'],
})
export class GenderComponent {
	public color!: string;
	public text!: string;

	@Input() set gender(gender: ICharacterGender) {
		const values = new Map<ICharacterGender, { color: string; text: string }>();
		values.set('Female', { color: 'lightpink', text: 'Feminino' });
		values.set('Male', { color: 'lightblue', text: 'Masculino' });
		values.set('Genderless', { color: 'blanchedalmond', text: 'Sem gênero' });
		values.set('unknown', { color: 'gainsboro', text: 'Desconhecido' });

		this.text = values.get(gender)!.text;
		this.color = values.get(gender)!.color;
	}
}
