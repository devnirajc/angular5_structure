import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderCollectionModule } from './pages/order-collection/order-collection.module';
import { sharedLayout } from './shared/components/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderHomeComponent } from './patges/order-collection/components/order-home/order-home.component';

@NgModule({
  declarations: [
    AppComponent,
    sharedLayout,
    OrderHomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    OrderCollectionModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
