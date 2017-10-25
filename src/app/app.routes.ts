import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const appRoutes: Routes = [
  {
    path:'homepage',
    component: HomepageComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}
