import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnticipoComponent } from './portal/pages/anticipo/anticipo.component';

const routes: Routes = [
  {
    path: '',
    component: AnticipoComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
