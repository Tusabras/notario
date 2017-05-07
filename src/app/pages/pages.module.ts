import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing-module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
