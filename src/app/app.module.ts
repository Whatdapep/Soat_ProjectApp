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
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
// import {jwt-decode} from 'jwt-decode';
// import { File } from '@ionic-native/file';
// import { FileOpener } from '@ionic-native/file-opener';
//import { Platform } from 'ionic-angular'; 

import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';

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
    WebView,
    InAppBrowser,
    ThemeableBrowser,
    NetworkInterface,
    BrowserTab,
    Device,
    Platform
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
