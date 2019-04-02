import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../system/services.service';

@Component({
  selector: 'app-mem-change-password',
  templateUrl: './mem-change-password.page.html',
  styleUrls: ['./mem-change-password.page.scss'],
})
export class MemChangePasswordPage implements OnInit {

  test:string = "First";
  items:any=null;
  tests:string = '';
  membership_no:any='';
  data:Observable<any>;
  mem_password:any='';
  part:any;
  // ----
  member_key:any='';
  
  old_password:any='';
  new_password:any='';
  confirm_password:any='';
  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService
  ) { }



  chk(){

    this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
    this.storage.get('mem_password').then((val2) => {

      this.mem_password = val2.toString();
      this.member_key = val2;
    console.log("this is get mem_password is "+this.mem_password);
      
  if(this.service.callfunction.validate_change_password(this.old_password,this.new_password,this.confirm_password)){
    console.log("Confirm Passwords Correct")

    if(this.new_password != this.mem_password){
      alert("old passsword not correct")
      
    


    // });
    }
    else{
     
      console.log("old Passwords Correct")

      var body = {
        membership_no:this.membership_no
      ,mem_password:this.new_password
    };
    // this.part = this.service.ws_mem_change_password;
    // this.data = this.service.posthttp(this.part,body);
    // this.data.subscribe(result =>{
    // this.items = result;
    // console.log(this.items);
    // if(this.items != ''){
    //   this.service.callfunction.Change_password_Complete(this.new_password);

    // }
    }
      
  
 

}else{
  console.log("False");
}
  console.log("old_password is "+this.old_password);
  console.log("new_password is "+this.new_password);
  console.log("confirm_password is "+this.confirm_password);
  

 });
    });


  }


  ngOnInit() {
  }

}
