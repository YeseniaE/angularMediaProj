import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MovieDetailComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [ MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//
