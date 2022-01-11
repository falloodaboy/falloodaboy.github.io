import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactmodalcontentComponent } from './components/contactmodalcontent/contactmodalcontent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgParticlesModule } from 'ng-particles';
import { ProjectsComponent } from './components/projects/projects.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectileComponent } from './components/projectile/projectile.component'
import { HttpClientModule } from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';
import { ApptoastsComponent } from './components/apptoasts/apptoasts.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ContactmodalcontentComponent,
    ProjectsComponent,
    ProjectileComponent,
    ApptoastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    NgParticlesModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    NgbToastModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
