import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ApiService } from './services/api.service';
import { BeersComponent } from './beers/beers.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { FilterComponent } from './filter/filter.component';
import { SkiplinksComponent } from './skiplinks/skiplinks.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BeersComponent,
    SearchComponent,
    HeaderComponent,
    BeerDetailsComponent,
    FilterComponent,
    SkiplinksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
