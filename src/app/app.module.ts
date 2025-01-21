import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesNotFoundComponent } from './pages-not-found/pages-not-found.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { BarraCierreComponent } from './components/barra-cierre/barra-cierre.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesNotFoundComponent,
    BarraCierreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
