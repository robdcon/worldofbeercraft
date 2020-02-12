import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';


const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'beers'},
  {path: 'beers', component: BeersComponent},
  {path: 'beers/:name', component: BeerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
