import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { GeolocalizacaoComponent } from './geolocalizacao/geolocalizacao.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';

@NgModule({
  declarations: [
    AppComponent,
    GeolocalizacaoComponent,
    SidenavComponent,
    LeitorQrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
