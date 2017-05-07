import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from '../app/app.component';
import { AppModule } from '../app/app.module';
import { PagesModule } from '../app/pages';
 
@NgModule({
  imports: [
    ServerModule,
    AppModule,
    // routing,
    PagesModule,
    // HomeModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppServerModule {
}