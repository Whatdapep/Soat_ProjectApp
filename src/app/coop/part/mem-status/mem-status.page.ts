import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';
// and import via
import * as JWT from 'jwt-decode';

// use JWT() for decode. Not jwt-decode() !!

// import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'app-mem-status',
  templateUrl: './mem-status.page.html',
  styleUrls: ['./mem-status.page.scss'],
})
export class MemStatusPage implements OnInit {
  test:string = "First";
  items:any=null;
  tests:string = '';
  membership_no:any='';
  mem_password:any='';
  data:Observable<any>;
  part:any;
  memberdetail:any;


  // ---------
  member_name:any;
  member_surname:any;
  date_of_birth:any;
  approve_date:any;
  id_card:any;
  member_group_name:any;
  position_name:any;
  address_present:any;
  token:any='';
  
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

 
this.Maintain()


  }


Maintain(){
   // ---------------------------------Storage ---------------------------------------
   this.storage.get('membership_no').then((val) => {
    this.membership_no = val.toString();
  console.log("this is get Storage"+this.membership_no);

// *----------------------HTTP ------------------------------------------------
this.part = this.service.ws_mem_status
// this.part = 'sc_confirm_register/0000091/c52c90744ab65d13cd6732390a72c0bb';
this.data = this.service.gethttp(this.part,this.membership_no,this.service.apikey);
// this.data = service.https(this.part);
this.data.subscribe(results =>{
this.items = results.toString(this.service.callfunction.getnametoken);
this.mainshow = true;
this.loadshow = false;


console.log(this.items);
// var tokentest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHRzIjpbeyJzZXEiOjAsIm1lbWJlcnNoaXBfbm8iOiIwMDAwMDkxIiwibWVtX2lkIjoiMzY0MDQwMDIwMzg0NiIsIm1lbWJlcl9uYW1lIjoi4Lit4Li04LiX4LiY4Li04Lie4LilIiwibWVtYmVyX3N1cm5hbWUiOiLguKfguLHguJnguYDguJ7guYfguI0iLCJtZW1fZW1haWwiOm51bGwsIm1lbV9wYXNzd29yZCI6IjZiZjhkNGRkOTM2ZjUxMTgxN2ZhOTZkYjk1N2I5YjM0IiwibWVtX2NvbmZpcm0iOiIxIiwiRGF0ZSI6bnVsbCwib3BlcmF0ZV9kYXRlIjoiMjAxOS0wMS0xNlQwNjo1MDoyMS4wMDBaIn1dLCJpYXQiOjE1NTQwMjIwMzYsImV4cCI6MTU1NDAyNTYzNn0.0nSbtX-z85lNkqWEJTZdsGaXNZFCwTMhK6Fu7YesEP4'
// let t = JWT(tokentest);
// let t = JWT(this.items.toString());
// console.log(t);
// ------------------------------------- MAp Space------------------------------------------------
// this.token = results.map(this.service.callfunction.gettoken)
// this.token = this.token.toString();
// console.log(this.token)

this.member_name = results.map(this.service.callfunction.getname)
this.member_name = this.member_name.toString();
// console.log("this is name"+this.member_name)

this.member_surname = results.map(this.service.callfunction.getsurname)
this.member_surname = this.member_surname.toString();

this.date_of_birth = results.map(this.service.callfunction.getdateborn)
this.date_of_birth = this.date_of_birth.toString();
// console.log(this.date_of_birth);

this.approve_date = results.map(this.service.callfunction.getapprove)
this.approve_date = this.approve_date.toString();

this.id_card = results.map(this.service.callfunction.getid_card)
this.id_card = this.id_card.toString();

this.member_group_name = results.map(this.service.callfunction.getgroupname)
this.member_group_name = this.member_group_name.toString();

this.position_name = results.map(this.service.callfunction.getposition)
this.position_name = this.position_name.toString();

this.address_present = results.map(this.service.callfunction.getaddress_present)
this.address_present = this.address_present.toString();


});
});

}
  Refresh(event) {


    setTimeout(() => {
      this.Maintain();
      event.target.complete();

    }, 1000);
  }

  gain(){
    this.router.navigate(['/mem-gain']);
  }
  coll(){
    this.router.navigate(['/mem-coll']);
  }
  mem_change(){
    console.log("i click mem_change()");
    this.router.navigate(['/mem-change-password']);
    // this.router.navigate(['/share-statement']);
  }
  logout(){
    console.log("i click logout()");
    
    this.storage.clear();
     this.router.navigate(['/logon']);
    // clear()
  }

  ngOnInit() {
  }

}
