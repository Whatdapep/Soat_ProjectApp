import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../coop/system/services.service'
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
// import { Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.page.html',
  styleUrls: ['./logon.page.scss'],
})
export class LogonPage implements OnInit {
  items:any;
    data:Observable<any>;
    username:string='';
    password:string='';
    strlogin:string;
   member:any='';
   members:any;
   membership_no_new:string;
   member_name:any;
   time:number=1000;
   part:any;
   member_surname:any='';
   member_key:any='';
   ip:any='';
   membership_no:any='';
   plat:boolean;
   geturl:any='';
   url:any='';
   url_pom:any='';
   defalut_url:any='test.cooparmy3.com';
   statuscode:boolean=false;
    constructor(
    public navCtrl: NavController ,  
    public alertController : AlertController,
    public router:Router,
    private Http:HttpClient,
    private storage: Storage,
    public loadingController: LoadingController,
    private service:ServicesService,
    private NetworkInterface:NetworkInterface,
    private Device:Device,
    private platform:Platform

  ) {
    this.geturl = this.service.geturl()
    console.log("url is "+this.geturl);
    this.username='';
    this.password='';
    console.log(this.statuscode);

    this.storage.get('url').then((val) => {
      this.url_pom = val
      console.log(this.url_pom);
      if(this.url_pom == null){
        
      this.url=`http://${this.defalut_url}/coop/api_mobile/app.php`;
    }else{

      this.url=`http://${this.url_pom}/coop/api_mobile/app.php`;
    }
      });

//     this.storage.get('membership_no').then((val) => {
//       this.membership_no = val;
//       if(this.membership_no == null){
//       }else{
//         this.router.navigate(['/footer']);
     
//       console.log("the membership_no is"+this.membership_no);
//  }

//     });


    if(this.platform.is('android') || this.platform.is('ios') || this.platform.is('desktop'))
    {
      this.plat = true;
      console.log("this is Platform test" + this.plat);
      console.log('Device UUID is: ' + this.Device.uuid);
    }
    else{
      console.log("this is Platform test False");
    }

    // is(platform) => this.plat = true
    // console.log('Device UUID is: ' + this.Device.uuid);
    // this.NetworkInterface.getWiFiIPAddress()
    // .then(address => console.info(`IP: ${address.ip.toString()}, Subnet: ${address.subnet.toString()}`))
    // .catch(error => console.error(`Unable to get IP: ${error}`));

    this.NetworkInterface.getCarrierIPAddress()
    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error => console.error(`Unable to get IP: ${error}`));

  const url = 'www.github.com';
  this.NetworkInterface.getHttpProxyInformation(url)
    .then(proxy => console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`))
    .catch(error => console.error(`Unable to get proxy info: ${error}`));



   }

   
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

async adminComplete() {
  const alert = await this.alertController.create({
    header: 'Alert',
    // subHeader: 'Subtitle',
    message: 'Hello Wellcome Admin',
    buttons: ['OK']
  });
  setTimeout(()=>{  
    this.statuscode == true;
    this.router.navigate(['/control']);
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
  this.service.sendurl(this.url);
  if ((this.username == 'soat') && (this.password == 'sscadmin')){
   
    this.adminComplete();
    
  }
   else if ((this.username != null) || (this.password != null)){

  

    console.log(" Username is "+this.username);
    console.log(" Password is "+this.password);
 
    this.part = this.service.login;
    var body = {
      type:this.part,   
      username:this.username
     ,password:this.password
};
    this.data = this.service.postphp(body);
  this.data.subscribe(result =>{
    this.items = result;
    this.members = result;
    this.ip= result.ip;
    console.log(this.ip);
    console.log(this.members);
    console.log(this.members.name);

    this.member_name = this.members.name;
    this.membership_no_new = this.members.mem_id;
    if(this.membership_no_new != ''){
      // this.presentLoadingWithOptions() = false;
      this.service.Set_Storage_member_key(this.password);
     this.time =  1;

     var members = this.membership_no_new;
     //  var members = '0000123';
     // this.storage.set('membership_no',this.membership_no_new.toString());
     var info ={
       membership_no:this.membership_no_new,
       member_name:this.member_name,
       ip_address:this.ip,
     }
     var memlenght = this.membership_no_new.length;
     if(memlenght = 7){
      this.service.Set_Storage_membership_no(members);
      this.storage.set('info',info);
      this.storage.set('member_name',this.member_name);
      console.log('set member_name is '+this.member_name)
      var check = this.storage.set('membership_no',this.membership_no_new);
      if(check){
        console.log("membership set Success "+this.membership_no_new)
      }
    }
    //  this.LoginComplete();
     this.service.callfunction.LoginComplete(this.member_name);
    //  console.log(this.time);
    
  }
 
    else {
      this.service.callfunction.Loginfalse();
  }
    
   

  

  });
}


}
  ngOnInit() {
  }
  register(){
    this.router.navigate(['/register']);

  }
 
  Forgetpwd(){
    this.router.navigate(['/re-register']);
  }

}