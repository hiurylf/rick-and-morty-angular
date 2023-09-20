import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '@directives/directives.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ICharacter } from '@interfaces/character';
import { GenderComponent } from '@components/gender/gender.component';

@Component({
	selector: 'app-card-character',
	standalone: true,
	imports: [
		CommonModule,
		MatCardModule,
		RouterLink,
		DirectivesModule,
		MatButtonModule,
		GenderComponent,
	],
	templateUrl: 'card-character.component.html',
	styleUrls: ['card-character.component.scss'],
})
export class CardCharacterComponent {
	@Input() character!: ICharacter;
}
