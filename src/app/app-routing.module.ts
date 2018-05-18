import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
