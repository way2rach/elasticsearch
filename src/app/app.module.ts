import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './details.component';
import {ItemService} from "./app.service";
import {PriceFilterPipe} from "./price-filter.pipe";

const appRoutes: Routes = [
  { path:'', component: ProductComponent},
  { path:'detail/:id', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    PriceFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ItemService, PriceFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
