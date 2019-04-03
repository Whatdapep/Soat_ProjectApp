import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../coop/system/services.service'

@Component({
  selector: 'app-logon',
  templateUrl: './logon.page.html',
  styleUrls: ['./logon.page.scss'],
})
export class LogonPage implements OnInit {
  items:any;
    data:Observable<any>;
    username:string;
    password:string;
    strlogin:string;
   member:any='';
   members:any;
   membership_no_new:string;
   member_name:any;
   time:number=1000;
   part:any;
   member_surname:any='';
   member_key:any='';
    constructor(
    public navCtrl: NavController ,  
    public alertController : AlertController,
    public router:Router,
    private Http:HttpClient,
    private storage: Storage,
    public loadingController: LoadingController,
    private service:ServicesService

  ) { }
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Error',
    // subHeader: 'Subtitle',
    message: 'Please Enter Username and Password Correctly',
    buttons: ['OK']
  });

  await alert.present();
}
async LoginComplete() {
  const alert = await this.alertController.create({
    header: 'Alert',
    // subHeader: 'Subtitle',
    message: 'Hello' + this.member_name+ 'Wellcome',
    buttons: ['OK']
  });
  setTimeout(()=>{  this.router.navigate(['/footer']);
 },2000);
  await alert.present();
}
// 
async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Hellooo',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();

  console.log('Loading dismissed!');
}
async presentLoadingWithOptions() {
  const loading = await this.loadingController.create({
    spinner: 'dots',
    duration: this.time,
    message: 'Please wait...',
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();
}
// -*--------------------------------------------------------------------------

login(){
  // this.presentLoadingWithOptions();
  this.service.callfunction.presentLoadingWithOptions();
 



   if ((this.username != null) || (this.password != null)){
    console.log(" Username is "+this.username);
    console.log(" Password is "+this.password);
  var body = {
                  membership_no:this.username
                 ,mem_password:this.password
    };
    this.part = this.service.login_post;
    this.data = this.service.posthttp(this.part,body);
  this.data.subscribe(result =>{
    this.items = result;
    this.members = result;
    console.log(this.members);
    this.membership_no_new = result.map(this.service.callfunction.getmembership_no)
    this.member_key = result.map(this.service.callfunction.getmem_password)
    
    this.member_name = result.map(this.service.callfunction.getname)
    this.member_surname = result.map(this.service.callfunction.getsurname)
    this.member_name = this.member_name+this.member_surname
    if(this.membership_no_new != ''){
      // this.presentLoadingWithOptions() = false;
      
     this.time =  1;
    //  this.LoginComplete();
     this.service.callfunction.LoginComplete(this.member_name);
     console.log(this.time);
    
  }
    else {
      this.service.callfunction.Loginfalse();
  }
    
   var members = this.membership_no_new;
  //  var members = '0000123';
  // this.storage.set('membership_no',this.membership_no_new.toString());

  this.service.Set_Storage_membership_no(members);
  this.service.Set_Storage_member_key(this.password);
  // this.storage.set('membership_no',members.toString());


  });
}
}
  ngOnInit() {
  }

}