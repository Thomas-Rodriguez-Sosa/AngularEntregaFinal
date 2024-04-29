import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './layouts/bar/bar.component';
import { LoginComponent } from './layouts/bar/pages/login/login.component';
import { BarModule } from './layouts/bar/bar.module';

const routes: Routes = [
  {
    path: 'bar',
    component: BarComponent,
    loadChildren: () => import('./layouts/bar/bar.module').then((m) => m.BarModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/login',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
