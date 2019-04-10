import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../coop/system/services.service'
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';


// import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  items:any;
  membership_no:any='';
  membership_no_test:any='';
  memberno:any;
  data:Observable<any>;
  sharestatement:any;
  sharestock:any;
  part:any;
  part2:any;
  data2:any;
  memberdetail:any;
  Category:any='photo';
  No:any='';
  Note:any='';
  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService,
    private Webview:WebView,
    private InAppBrowser:InAppBrowser,
    private themeableBrowser: ThemeableBrowser
    // private Option:InAppBrowserOptions
  ) {
   
   }

  ngOnInit() {
  }
Maintain(){
 this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);

    this.storage.get('www_data_No').then((val) => {
      this.No = val.toString();
    console.log("this is get No"+this.No);
      
  // *----------------------HTTP ------------------------------------------------
this.part = this.service.www_data_detail

this.data = this.service.gethttp(this.part,this.No,this.service.apikey);
this.data.subscribe(result =>{
this.items = result;
console.log(this.items)
// ------------------------------------- MAp Spacet
this.Note = this.items.map(this.service.callfunction.getNote);

});
});
    });


}
  webclick(){


    const browser = this.InAppBrowser.create('https://www.google.com/','_self',{location:'no'});
    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });

    browser.close();
  }

  webnew(){

    const options: ThemeableBrowserOptions = {
    statusbar: {
      color: '#ffffffff'
  },
  toolbar: {
      height: 44,
      color: '#f0f0f0ff'
  },
  title: {
      color: '#003264ff',
      showPageTitle: true
  },
  backButton: {
      image: 'back',
      imagePressed: 'back_pressed',
      align: 'left',
      event: 'backPressed'
  },
  forwardButton: {
      image: 'forward',
      imagePressed: 'forward_pressed',
      align: 'left',
      event: 'forwardPressed'
  },
  closeButton: {
      image: 'close',
      imagePressed: 'close_pressed',
      align: 'left',
      event: 'closePressed'
  },
  customButtons: [
      {
          image: 'share',
          imagePressed: 'share_pressed',
          align: 'right',
          event: 'sharePressed'
      }
  ],
  menu: {
      image: 'menu',
      imagePressed: 'menu_pressed',
      title: 'Test',
      cancel: 'Cancel',
      align: 'right',
      items: [
          {
              event: 'helloPressed',
              label: 'Hello World!'
          },
          {
              event: 'testPressed',
              label: 'Test!'
          }
      ]
  },
  backButtonCanClose: true
}

    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://ionicacademy.com', '_blank', options);

    browser.on('closePressed').subscribe(data => {
      browser.close();
    })

 

  }

}
