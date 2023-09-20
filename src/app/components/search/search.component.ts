import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';

@Component({
	selector: 'app-search',
	standalone: true,
	imports: [CommonModule, MatInputModule, ReactiveFormsModule],
	templateUrl: 'search.component.html',
	styleUrls: ['search.component.scss'],
})
export class SearchComponent {
	public searchFormControl = new FormControl('');

	@Input() placeholder = 'Nome do personagem';
	@Output() searchChange: Observable<string>;

	constructor() {
		this.searchChange = this.searchFormControl.valueChanges.pipe(
			map(value => String(value)),
			distinctUntilChanged(),
			debounceTime(250)
		);
	}
}
