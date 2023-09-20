import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { MatCardModule } from '@angular/material/card';
import { DirectivesModule } from '@directives/directives.module';
import { GenderComponent } from '@components/gender/gender.component';

@NgModule({
	declarations: [DetailComponent],
	imports: [
		CommonModule,
		DetailRoutingModule,
		MatCardModule,
		DirectivesModule,
		GenderComponent,
	],
})
export class DetailModule {}
