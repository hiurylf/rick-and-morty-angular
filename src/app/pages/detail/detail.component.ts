import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, tap } from 'rxjs';
import { ICharacter } from '@interfaces/character';
import { CharacterService } from '@services/character.service';

@Component({
	selector: 'app-detail',
	templateUrl: 'detail.component.html',
	styleUrls: ['detail.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
	@Input() id!: number;
	public character$?: Observable<ICharacter>;
	public notFound$ = new BehaviorSubject(false);

	constructor(private readonly characterService: CharacterService) {}

	ngOnInit(): void {
		this.character$ = this.characterService.getOneById(this.id).pipe(
			tap(() => this.notFound$.next(false)),
			catchError(() => {
				this.notFound$.next(true);
				return EMPTY;
			})
		);
	}
}
