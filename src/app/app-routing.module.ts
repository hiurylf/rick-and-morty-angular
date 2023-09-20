import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'detail/:id',
		loadChildren: () =>
			import('./pages/detail/detail.module').then(m => m.DetailModule),
	},
	{ path: '**', redirectTo: 'home' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
