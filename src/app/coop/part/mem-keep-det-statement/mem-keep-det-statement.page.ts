import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';
import { ThemeableBrowser,ThemeableBrowserObject,ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';


@Component({
  selector: 'app-mem-keep-det-statement',
  templateUrl: './mem-keep-det-statement.page.html',
  styleUrls: ['./mem-keep-det-statement.page.scss'],
})
export class MemKeepDetStatementPage implements OnInit {
  test:string = "First";
  items:any=null;
  tests:string = '';
  membership_no:any='';
  receive_month:any='';
  receive_year:any='';
  seq_no:any='';
  data:Observable<any>;
  part:any;
  receive_month_fp:any='';
  money_amount:any='';
   data2:Observable<any>;
  part2:any;
  // ---------
 keep:any='';
 print:any='';
 print_result:any='';


 mainshow:boolean = false;
 loadshow:boolean = true;
 
  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService,
    private themeableBrowser:ThemeableBrowser
  ) { 
    
this.Maintain()
  }

  ngOnInit() {
  }

  print_keep_det(){
   this.print = this.service.print_pdf(this.membership_no,this.receive_month,this.receive_year);

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
console.log(this.print);
  //  const browser: ThemeableBrowserObject = this.themeableBrowser.create(this.print, '_blank', options);
  //  const browser: ThemeableBrowserObject = this.themeableBrowser.create(`http://test.cooparmy3.com/coop/print_pdf_kep_mobile.php?membership_no=0000091&month=3&year=2019&type=`, '_blank', options);
   

  //   browser.on('closePressed').subscribe(data => {
  //     browser.close();
  //   console.log("click Print");
  // });
}
Maintain(){
this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
    this.storage.get('receive_year').then((val) => {
      this.receive_year = val.toString();
    console.log("this is get year"+this.receive_year);
    this.storage.get('receive_month').then((val) => {
      this.receive_month = val.toString();
    console.log("this is get month"+this.receive_month);

    this.storage.get('seq_no').then((val) => {
      this.seq_no = val.toString();
    console.log("this is get seq_no"+this.seq_no);
  // *----------------------HTTP ------------------------------------------------

    this.part = this.service.ws_mem_keep_det_distinct
    var body = {
      type:this.part,
      membership_no:this.membership_no
     ,receive_year:this.receive_year
     ,receive_month:this.receive_month
  };
    this.data = this.service.postphp(body);
    this.data.subscribe(results =>{
    this.items = results;
    this.mainshow = true;
    this.loadshow = false;
    console.log(this.items);
    this.money_amount = this.items.map(this.service.callfunction.getmoney_amount);
    this.money_amount =this.money_amount.toString();

    this.receive_month_fp = this.items.map(this.service.callfunction.getreceive_month_fp);
    this.receive_month_fp =this.receive_month_fp.toString();
    this.part2 = this.service.ws_mem_keep_det_statement
    var body2 = {
      type:this.part2,
      membership_no:this.membership_no
     ,receive_year:this.receive_year
     ,receive_month:this.receive_month
     ,seq_no:this.seq_no
  };
   
    this.data2 = this.service.postphp(body2);
    this.data2.subscribe(results2 =>{
    this.keep = results2;
    this.mainshow = true;
    this.loadshow = false;
    console.log(this.keep);
    this.print = this.service.print_pdf(this.membership_no,this.receive_month,this.receive_year);
  });
    });
  });
});
});
    });

}
}
