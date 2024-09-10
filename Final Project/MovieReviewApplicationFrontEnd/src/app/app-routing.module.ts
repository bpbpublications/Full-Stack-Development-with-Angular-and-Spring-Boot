/**
 * Version:1.0
 * Author:Sangeeta Joshi
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'trailer/:movie_id',
    component: TrailerComponent
  },
  {
    path: 'review/:movie_id',
    component: ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
