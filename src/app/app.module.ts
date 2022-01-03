import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactmodalcontentComponent } from './components/contactmodalcontent/contactmodalcontent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgParticlesModule } from 'ng-particles';
import { ProjectsComponent } from './components/projects/projects.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectileComponent } from './components/projectile/projectile.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ContactmodalcontentComponent,
    ProjectsComponent,
    ProjectileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    NgParticlesModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
