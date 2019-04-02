import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';

@Component({
  selector: 'app-mem-keep-det',
  templateUrl: './mem-keep-det.page.html',
  styleUrls: ['./mem-keep-det.page.scss'],
})
export class MemKeepDetPage implements OnInit {
  test:string = "First";
  items:any=null;
  tests:string = '';
  membership_no:any='';
  data:Observable<any>;
  part:any;
  // ---------
 keep:any='';
 color:any=[
  "warning",
  "secondary",
  "success"

 ]
 colorrandom:any='';
 
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
    this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
      
  // *----------------------HTTP ------------------------------------------------
    this.part = service.ws_mem_keep_det
    this.data = service.gethttp(this.part,this.membership_no,this.service.apikey);
    this.data.subscribe(results =>{
    this.items = results;
    this.mainshow = true;
    this.loadshow = false;
    console.log(this.items);
    this.colorrandom = this.color[Math.floor(Math.random()*this.color.length)];
    });
  });

   }
   
  ngOnInit() {
  }
  keep_det_statement(item:string){
    this.storage.set('kep_method_ref',item);
    console.log('set Storage is '+item)

    this.router.navigate(['/mem-keep-det-statement']);
    

  }
}
