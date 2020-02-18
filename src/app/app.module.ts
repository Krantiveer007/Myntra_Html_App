import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterNavLinksComponent } from './footer/footer-nav-links/footer-nav-links.component';
import { SearchedResultsComponent } from './content/searched-results/searched-results.component';
import { SearchFiltersComponent } from './content/search-filters/search-filters.component';
import { ResultFiltersComponent } from './content/searched-results/result-filters/result-filters.component';
import { ResultCardsComponent } from './content/searched-results/result-cards/result-cards.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    FooterNavLinksComponent,
    SearchedResultsComponent,
    SearchFiltersComponent,
    ResultFiltersComponent,
    ResultCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgSelectModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
