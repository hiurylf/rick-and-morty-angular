import { Component } from '@angular/core';
import {
	BehaviorSubject,
	Observable,
	map,
	switchMap,
	defaultIfEmpty,
	of,
	catchError,
	tap,
	combineLatest,
} from 'rxjs';
import {
	CharacterService,
	IPaginationCharacter,
} from '@services/character.service';
import { ICharacter } from '@interfaces/character';

@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss'],
})
export class HomeComponent {
	public search$ = new BehaviorSubject<string>('');
	public pageIndex$ = new BehaviorSubject<number>(0);
	public characters$: Observable<ICharacter[]>;
	public pagination$ = new Observable<IPaginationCharacter>();

	constructor(private readonly characterService: CharacterService) {
		this.characters$ = combineLatest([this.search$, this.pageIndex$]).pipe(
			switchMap(([text, page]) =>
				this.characterService.getMany({ name: text, page: page + 1 }).pipe(
					tap(({ info }) => (this.pagination$ = of(info))),
					map(({ results = [] }) => results),
					catchError(() => of([]))
				)
			),
			defaultIfEmpty([])
		);
	}

	public onSearchChange(text: string): void {
		this.search$.next(text);
		this.pageIndex$.next(0);
	}

	public onPaginationChange(pageIndex: number): void {
		this.pageIndex$.next(pageIndex);
	}
}
