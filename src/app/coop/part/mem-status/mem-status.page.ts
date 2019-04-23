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
  this.storage.get('member_name').then((val) => {
    this.member_name = val.toString();

// *----------------------HTTP ------------------------------------------------
this.part = this.service.ws_mem_status
// this.part = 'sc_confirm_register/0000091/c52c90744ab65d13cd6732390a72c0bb';
var body = {
  type:this.part,
  membership_no:this.membership_no

}

this.data = this.service.postphp(body);
// this.data = service.https(this.part);
this.data.subscribe(results =>{
// this.items = results.toString(this.service.callfunction.getnametoken);
this.items = results
this.mainshow = true;
this.loadshow = false;

this.approve_date = results.approve_date;
console.log(this.items);


});
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
