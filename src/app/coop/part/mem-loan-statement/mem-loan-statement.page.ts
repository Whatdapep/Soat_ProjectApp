import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';

@Component({
  selector: 'app-mem-loan-statement',
  templateUrl: './mem-loan-statement.page.html',
  styleUrls: ['./mem-loan-statement.page.scss'],
})
export class MemLoanStatementPage implements OnInit {
  test:string = "First";
  itemm:any='';
  items:any=null;
  tests:string = '';
  membership_no:any='';

  data_head:Observable<any>;
  part_head:any;


  data:Observable<any>;
  part:any;

  data2:Observable<any>;
  part2:any;

  data_loan:Observable<any>;
  part_loan:any;
  loan_main:any='';
  // ---------
  loan_head:any='';
 loan:any='';
 loan_no:any='';
 loan_statement:any='';
 loan_item_description:any=''; 
 mainshow:boolean = false;
 loadshow:boolean = true;
 balance:any='';
  

 
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

    storage.get('loan_contract_no').then((val) => {
      this.loan_no = val.toString();
      console.log( "this is loan_statement inside "+this.loan_no);
      
  // *----------------------HTTP ------------------------------------------------
  this.part_loan = service.ws_mem_loan
  this.data_loan = service.gethttp(this.part_loan,this.membership_no,this.service.apikey);
  this.data_loan.subscribe(results =>{
  this.loan_main = results
  console.log(this.loan_main);

 

  this.part_head = service.ws_mem_loan_item
  this.data_head = service.gethttp(this.part_head,this.loan_no,this.service.apikey);
  this.data_head.subscribe(results =>{
  this.loan_head = results;
  this.mainshow = true;
  this.loadshow = false;
  this.loan_item_description = results.map(this.service.callfunction.getloan_type_description)
  this.loan_item_description = this.loan_item_description.toString(); 
  console.log(this.loan_head);


    this.part = service.ws_mem_loan_statement
    this.data = service.gethttp(this.part,this.loan_no,this.service.apikey);
    this.data.subscribe(results =>{
    this.items = results;
    this.loan_statement=results;
  

    console.log(this.items);
    this.part2 = service.ws_mem_loan_coll
    console.log(this.part2);
    this.data2 = service.gethttp(this.part2,this.loan_no,this.service.apikey);
    this.data2.subscribe(results =>{
      this.itemm = results;
      // this.loan_statement=results;
      // this.mainshow = true;
      // this.loadshow = false;
      console.log(this.itemm);
    });
    // this.balance = this.loan_main.map(this.service.callfunction.getprincipal_balance);
    // this.balance = this.balance.toString();
    this.balance = this.loan_main.map(this.service.callfunction.getprincipal_balance)
    this.balance = this.balance.toString(); 



    });
    
  });
});
    });
  });
    

   }

  ngOnInit() {
  }

}
