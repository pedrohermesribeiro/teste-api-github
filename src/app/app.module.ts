import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './api-github/home/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilGithubComponent } from './api-github/perfil/perfil-github/perfil-github.component';
import { RepositoryGithubComponent } from './api-github/repos/repository-github/repository-github.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilGithubComponent,
    RepositoryGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
