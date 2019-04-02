import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';
@Component({
  selector: 'app-mem-disposit-statement',
  templateUrl: './mem-disposit-statement.page.html',
  styleUrls: ['./mem-disposit-statement.page.scss'],
})
export class MemDispositStatementPage implements OnInit {
  test:string = "First";
  items:any=null;
  tests:string = '';
  membership_no:any='';
  data:Observable<any>;
  part:any;
  data2:Observable<any>;
  part2:any;


  // ---------
 disposit:any='';
 disposit_no:any='';
 disposit_statement_head:any='';
 disposit_statement:any='';
 
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

    storage.get('deposit_account_no').then((val) => {
      this.disposit_no = val.toString();
      console.log( "this is loan_statement inside "+this.disposit_no);
      
  // *----------------------HTTP ------------------------------------------------
    this.part = service.ws_mem_disposit_statement_head
    this.data = service.gethttp(this.part,this.disposit_no,this.service.apikey);
    this.data.subscribe(results =>{
    this.items = results;
    this.disposit_statement_head=results;
    this.mainshow = true;
    this.loadshow = false;

    console.log(this.items);
    this.part2 = service.ws_mem_disposit_statement
    console.log(this.part2);
    this.data2 = service.gethttp(this.part2,this.disposit_no,this.service.apikey);
    this.data2.subscribe(results =>{
      this.disposit_statement = results;
      // this.loan_statement=results;
      // this.mainshow = true;
      // this.loadshow = false;
      console.log(this.disposit_statement);
    });




    });
  });
});



   }

  ngOnInit() {
  }

}
