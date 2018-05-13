import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from './../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './../shared/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent, HeaderComponent, SidebarComponent]
})
export class PagesModule { }
