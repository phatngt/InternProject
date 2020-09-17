import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material/material.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component'
import { InsertInfoPageComponent } from './pages/insert-info-page/insert-info-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AppDirective } from './directive/insert-page/left.directive';
import { InputComponent } from './components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SelectComponent } from './components/select/select.component';
import { RightDirective } from './directive//insert-page/right.directive';
import { ViewtableComponent } from './components/viewtable/viewtable.component';
import { ViewInfoPageComponent } from './pages/view-info-page/view-info-page.component';
import { ViewPageDirective } from './directive/view-page/view-page.directive';
import { EditInfoPageComponent } from './pages/edit-info-page/edit-info-page.component';
import { LeftDirective } from './directive/edit-info-page/left.directive';
import { EditRightPageDirective } from './directive/edit-info-page/edit-right-page.directive';
import { RootDirective } from './directive/app-page/root.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    InsertInfoPageComponent,
    SearchPageComponent,
    AppDirective,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    SelectComponent,
    RightDirective,
    ViewtableComponent,
    ViewInfoPageComponent,
    ViewPageDirective,
    EditInfoPageComponent,
    LeftDirective,
    EditRightPageDirective,
    RootDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
