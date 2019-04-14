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
    
  this.Maintain();
   
   }

  ngOnInit() {
  }
Maintain(){
            this.storage.get('membership_no').then((val) => {
                  this.membership_no = val.toString();
                console.log("this is get Storage"+this.membership_no);

                this.storage.get('loan_contract_no').then((val) => {
                  this.loan_no = val.toString();
                  console.log( "this is loan_statement inside "+this.loan_no);
                  
              // *----------------------HTTP ------------------------------------------------
              this.part_loan = this.service.ws_mem_loan
              var body ={
                type:this.part_loan,
                membership_no:this.membership_no
              }
              this.data_loan = this.service.postphp(body);
              this.data_loan.subscribe(results =>{
              this.loan_main = results 
              this.mainshow = true;
              this.loadshow = false;
              console.log(this.loan_main);
              this.part_head = this.service.ws_mem_loan_item
              var body ={
                type:this.part_head,
                membership_no:this.loan_no
              }
              this.data_head = this.service.postphp(body);
              this.data_head.subscribe(results =>{
              this.loan_head = results;
             
              this.loan_item_description = results.map(this.service.callfunction.getloan_type_description)
              this.loan_item_description = this.loan_item_description.toString(); 
              console.log(this.loan_head);
                this.part = this.service.ws_mem_loan_statement
                var body ={
                  type:this.part,
                  membership_no:this.loan_no
                }
                this.data = this.service.postphp(body);
                this.data.subscribe(results =>{
                this.items = results;
                this.loan_statement=results;
                console.log(this.items);
                this.part2 = this.service.ws_mem_loan_coll
                var body ={
                  type:this.part2,
                  membership_no:this.loan_no
                }
                console.log(this.part2);
                this.data2 = this.service.postphp(body);
                this.data2.subscribe(results =>{
                  this.itemm = results;
                  console.log(this.itemm);
                });
                // this.balance = this.loan_main.map(this.service.callfunction.getprincipal_balance)
                // this.balance = this.balance.toString(); 
                });
              });
            });
                });
              });

}
}
