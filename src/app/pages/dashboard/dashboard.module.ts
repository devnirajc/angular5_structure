import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
