import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component'
import { InsertInfoPageComponent } from './pages/insert-info-page/insert-info-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AppDirective } from './directive/app.directive';
import { InputComponent } from './components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module'
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    InsertInfoPageComponent,
    SearchPageComponent,
    AppDirective,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
