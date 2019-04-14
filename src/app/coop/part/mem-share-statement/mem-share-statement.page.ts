import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';

@Component({
  selector: 'app-mem-share-statement',
  templateUrl: './mem-share-statement.page.html',
  styleUrls: ['./mem-share-statement.page.scss'],
})
export class MemShareStatementPage implements OnInit {

  test:string = "First";
  items_head:any=null;
  items:any='';
  tests:string = '';
  membership_no:any='';
  data:Observable<any>;
  part:any;
  data2:Observable<any>;
  part2:any;
  // ---------

 mainshow:boolean = false;
 share_statement:any='';
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
  this.part = this.service.ws_mem_share_statement_head
  var body ={
    type:this.part,
    membership_no:this.membership_no
  }
  this.data = this.service.postphp(body);
  this.data.subscribe(results =>{
  this.items_head = results;
  this.mainshow = true;
  this.loadshow = false;
  console.log(this.items_head);
  this.part2 = this.service.ws_mem_share_statement
  var body ={
    type:this.part2,
    membership_no:this.membership_no
  }
  this.data2 = this.service.postphp(body);
  this.data2.subscribe(results =>{
  this.items = results;
  this.share_statement = results;
  this.mainshow = true;
  this.loadshow = false;
  console.log(this.items);
  });
});
});
}
}
