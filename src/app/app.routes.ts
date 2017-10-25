import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {
    path:'homepage',
    component: HomepageComponent,
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
