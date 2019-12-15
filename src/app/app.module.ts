import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormComponent} from './form/form.component';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import { DettaglioPostComponent } from './dettaglio-post/dettaglio-post.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = 
  [
    {path :'DettaglioPost/:id',component:DettaglioPostComponent},
    {path :'',component:HomeComponent},
    {path :'Form',component:FormComponent},

  ]

@NgModule({
  declarations: [
    AppComponent,FormComponent,DettaglioPostComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,FormComponent]
})
export class AppModule { }
