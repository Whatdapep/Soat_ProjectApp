import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-checklogin',
  templateUrl: './checklogin.page.html',
  styleUrls: ['./checklogin.page.scss'],
})
export class CheckloginPage implements OnInit {
  membership_no:any='';
  url:any='';
  constructor(
    public router:Router, 
    private storage: Storage,
    private network: Network,
    private toastController:ToastController
    ) {

      // this.network.onDisconnect().subscribe(() => {
      //   this.falsenetwork()
      //   console.log('network was disconnected :-(');
      //   setTimeout(() => {
      //     this.router.navigate(['/stopped']);
      //   }, 3000);

      // });
      
      // disconnectSubscription.unsubscribe();
      
      
     
      //  this.network.onConnect().subscribe(() => {
        //  this.onconnectnetwork()
        console.log('network connected!');
       
     this.storage.get('url').then((val) => {
      this.url = val;
      console.log(this.url);
    });
 this.storage.get('membership_no').then((val) => {
  this.membership_no = val;
  if(this.membership_no == null){
    setTimeout(()=>{   
      this.storage.set('authmenu',"menu");
      this.router.navigate(['/logon']);
     
   },3000);
  }else{
    setTimeout(()=>{  
    
      this.storage.set('authmenu',"menu");
      this.router.navigate(['/authcode/checked']);
      
   },3000);
  
 
  console.log("the membership_no is"+this.membership_no);
}

});
        
      // });
  
      // connectSubscription.unsubscribe();

      

}

async falsenetwork() {
  const toast = await this.toastController.create({
    message: 'ไม่มีการเชื่อมต่ออินเทอร์เน็ต',
    duration: 2000
  });
  toast.present();
}

async onconnectnetwork() {
  const toast = await this.toastController.create({
    message: 'เชื่อมต่ออินเทอร์เน็ต',
    duration: 2000
  });
  toast.present();
}
  ngOnInit() {
  }

}
