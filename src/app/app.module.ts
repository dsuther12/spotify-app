import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { SearchComponent } from './search/search.component';
import { ArtistInfoComponent } from './artist-info/artist-info.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    SearchComponent,
    ArtistInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
