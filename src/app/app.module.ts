import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
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
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
import { PinDialog } from '@ionic-native/pin-dialog/ngx';
import { Network } from '@ionic-native/network/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
// import { AuthcodePage } from './coop/system/authcode/authcode.page';
// 
// import { ComAuthcodeComponent } from './coop/system/com-authcode/com-authcode.component';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    // AuthcodePage
    // ComAuthcodeComponent
  ],
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
    Platform,
    PinDialog,
    Network,
    FingerprintAIO,
    EmailComposer,
    Camera
    
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
