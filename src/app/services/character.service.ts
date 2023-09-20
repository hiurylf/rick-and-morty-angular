import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICharacter } from '@interfaces/character';

export interface IPaginationCharacter {
	count: number;
	pages: number;
	next: null | string;
	prev: null | string;
}

interface IGetManyCharacter {
	info: IPaginationCharacter;
	results: ICharacter[];
}

@Injectable({
	providedIn: 'root',
})
export class CharacterService {
	public isLoading$ = new BehaviorSubject(false);
	private API_URL = 'https://rickandmortyapi.com/api/character';

	constructor(private readonly http: HttpClient) {}

	public getMany(params?: {
		name: string;
		page: number;
	}): Observable<IGetManyCharacter> {
		this.isLoading$.next(true);
		return this.http.get<IGetManyCharacter>(this.API_URL, {
			params,
		});
	}

	public getOneById(id: number): Observable<ICharacter> {
		this.isLoading$.next(true);
		return this.http.get<ICharacter>(`${this.API_URL}/${id}`);
	}
}
