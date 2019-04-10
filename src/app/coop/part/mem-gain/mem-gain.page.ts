import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';

@Component({
  selector: 'app-mem-gain',
  templateUrl: './mem-gain.page.html',
  styleUrls: ['./mem-gain.page.scss'],
})
export class MemGainPage implements OnInit {
  test:string = "First";
  items:any=null;
  tests:string = '';
  membership_no:any='';
  data:Observable<any>;
  part:any;
  // ---------
 loan:any='';
 loan_type:any='';
 
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

  ngOnInit() {
  }

  Maintain(){
    this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
  // *----------------------HTTP ------------------------------------------------
    this.part = this.service.ws_mem_recrieve_gain
    this.data = this.service.gethttp(this.part,this.membership_no,this.service.apikey);
    this.data.subscribe(results =>{
    this.items = results;
    this.mainshow = true;
    this.loadshow = false;
    console.log(this.items);
    });
  });
   
  }

}
