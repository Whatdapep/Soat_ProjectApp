import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';


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
  var body = {
    membership_no:this.membership_no
   ,receive_year:this.receive_year
   ,receive_month:this.receive_month
};
    this.part = service.ws_mem_keep_det_distinct
    this.data = service.posthttps(this.part,body,this.service.apikey);
    this.data.subscribe(results =>{
    this.items = results;
    this.mainshow = true;
    this.loadshow = false;
    console.log(this.items);
    this.money_amount = this.items.map(this.service.callfunction.getmoney_amount);
    this.money_amount =this.money_amount.toString();

    this.receive_month_fp = this.items.map(this.service.callfunction.getreceive_month_fp);
    this.receive_month_fp =this.receive_month_fp.toString();

    var body2 = {
      membership_no:this.membership_no
     ,receive_year:this.receive_year
     ,receive_month:this.receive_month
     ,seq_no:this.seq_no
  };
    this.part2 = service.ws_mem_keep_det_statement
    this.data2 = service.posthttps(this.part2,body2,this.service.apikey);
    this.data2.subscribe(results2 =>{
    this.keep = results2;
    this.mainshow = true;
    this.loadshow = false;
    console.log(this.keep);


  });
    });
  });
});
});
    });


  }

  ngOnInit() {
  }

  print_keep_det(){
    console.log("click Print");
  }
}
