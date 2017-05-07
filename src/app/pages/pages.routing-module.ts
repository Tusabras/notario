import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
  {  
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {  
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {}