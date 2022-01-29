import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { HeaderComponent } from './header/header.component';
import { PopupbioComponent } from './header/popupbio/popupbio.component';
import { FooterComponent } from './footer/footer.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { NationOnlyComponent } from './nation-only/nation-only.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupbioComponent,
    FooterComponent,
    ExhibitComponent,
    NationOnlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
  	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
