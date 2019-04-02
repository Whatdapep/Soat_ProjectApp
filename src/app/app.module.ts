import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule}from'@angular/common/http';
import {HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
// import {jwt-decode} from 'jwt-decode';
// import { File } from '@ionic-native/file';
// import { FileOpener } from '@ionic-native/file-opener';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    // PopoverController,
  
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
