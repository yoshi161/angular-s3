import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { InfoComponent } from './info/info.component';
import { MetaGuard } from 'ng2-meta';

const routes: Routes = [
	{
		path: 'users',
		component: UsersComponent,
		canActivate: [MetaGuard],
		data: {
		  meta: {
			title: 'Users page',
			description: 'Description of the users page'
		  }
		}
	},
	{
		path: 'info',
		component: InfoComponent,
		canActivate: [MetaGuard],
		data: {
		  meta: {
			title: 'Info Page',
			description: 'Description of  page'
		  }
		}
	}	
]

@NgModule({
  imports: [
	RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
