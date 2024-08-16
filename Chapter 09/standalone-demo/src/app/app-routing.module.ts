import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []=[
  {
    path:'lazyload',
    loadComponent:()=>
    import('./standalone/standalone.component')
    .then((m)=>m.StandaloneComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
