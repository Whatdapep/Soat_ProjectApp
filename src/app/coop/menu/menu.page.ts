import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../system/services.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  test:string = "First";
  tests:string = '';
  
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

  mainshow:boolean = false;
  loadshow:boolean = true;
  
  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService
    
    ) { 

      function getsharestock(item,index) {
        var fullname = [item.index];
        return fullname;
      }
      
      this.storage.get('membership_no').then((val) => {
        this.membership_no = val.toString();
      console.log("this is get Storage"+this.membership_no);
        
    // *----------------------HTTP ------------------------------------------------
this.part = service.ws_mem_share_statement_head
this.data = service.gethttp(this.part,this.membership_no,this.service.apikey);
this.data.subscribe(result =>{
this.items = result;
this.sharestatement = result;

this.mainshow = true;
this.loadshow = false;

console.log(this.sharestatement);
this.sharestock = result.share_stock;

this.part2 = service.sc_confirm_register
this.data2 = service.gethttp(this.part2,this.membership_no,this.service.apikey);
this.data2.subscribe(result =>{
this.memberdetail = result;
console.log(this.memberdetail)
});

// ------------------------------------- MAp Space
var share_stock = share_stock;
var item2 = item2;
this.sharestock = result.map(this.service.callfunction.getsharestock);
// this.sharestock = result.map(getsharestock('',share_stock));
this.sharestock = this.sharestock.toString();
console.log("this is sharestock"+this.sharestock)



});
});
    }

  ngOnInit() {
  }
  backmain(){

    // this.mainshow= true;
    // this.loanshow=false;
  }
  share(){
    console.log("i just Click it");
    // this.test = "share test ";
    this.router.navigate(['/mem-share-statement']);
  }
  dep(){
    console.log("i just Click it");
    // this.test = "pomming Heelo ";
    this.router.navigate(['/mem-disposit']);
  }
  loan(){
    console.log("i just Click Good");
    // this.mainshow = false;
    // this.loanshow = true;
    this.router.navigate(['/mem-loan']);
  }
  
  kep(){
    // console.log("i just Click Good");
    this.router.navigate(['/mem-keep-det']);

  }
  dividend(){
    // console.log("i just Click dividend");
    this.router.navigate(['/mem-dividend']);
  }

}