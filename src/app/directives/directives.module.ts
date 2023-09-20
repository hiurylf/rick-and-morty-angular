import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageNotFoundDirective } from '@directives/image-not-found.directive';

@NgModule({
	declarations: [ImageNotFoundDirective],
	imports: [CommonModule],
	exports: [ImageNotFoundDirective],
})
export class DirectivesModule {}
