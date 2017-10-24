import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage/homepage.component';
// import { ContactComponent } from './homepage/contact.component';
//THIS IS AN EXAMPLE OF A DIFFERENT COMPONENT

const appRoutes: Routes = [
  {
    path:'home',
    component: HomepageComponent,
    // path: 'contact',
    // component: ContactComponent,
    //THIS IS AN EXAMPLE OF HOW TO ADD IT
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}
