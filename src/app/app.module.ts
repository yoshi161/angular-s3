import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersComponent } from './users/users.component';
import { InfoComponent } from './info/info.component';
import { MetaModule, MetaConfig, MetaService } from 'ng2-meta';

const metaConfig: MetaConfig = {
  //Append a title suffix such as a site name to all titles
  //Defaults to false
  useTitleSuffix: true,
  defaults: {
    title: 'Default title for pages without meta in their route',
    titleSuffix: ' | Site Name',
    'og:image': 'http://example.com/default-image.png',
    'any other': 'arbitrary tag can be used'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetaModule.forRoot(metaConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
