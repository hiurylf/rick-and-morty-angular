import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from '@components/search/search.component';
import { CardCharacterComponent } from '@components/card-character/card-character.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		SearchComponent,
		CardCharacterComponent,
		MatPaginatorModule,
	],
})
export class HomeModule {}
