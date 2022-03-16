import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PaysComponent } from './components/pays/pays.component';
import { ListComponent } from './components/list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedService } from './services/shared.service';
import { Erreur404Component } from './components/erreur404/erreur404.component';
import { DetailsComponent } from './components/details/details.component';

const appRoute : Routes = [
  {path:'', component: AcceuilComponent},
  {path:'Acceuil', component: AcceuilComponent},
  {path:'Pays', component:PaysComponent},
  {path:'Contients', component: ListComponent},
  {path:'Details', component: DetailsComponent},
  {path:'**', component: Erreur404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    PaysComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
