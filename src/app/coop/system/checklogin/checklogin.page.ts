import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';

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
    private network: Network
    ) {

      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        setTimeout(() => {
          this.router.navigate(['/stopped']);
        }, 3000);

      });
      
      disconnectSubscription.unsubscribe();
      
      
      // watch network for a connection
      let connectSubscription = this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        // We just got a connection but we need to wait briefly
         // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
     // this.storage.clear();
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
      // this.router.navigate(['/logon']);
      this.storage.set('authmenu',"menu");
      this.router.navigate(['/authcode/checked']);
      
   },3000);
  
 
  console.log("the membership_no is"+this.membership_no);
}

});
        
      });
      
      // stop connect watch
      connectSubscription.unsubscribe();

      

}
  ngOnInit() {
  }

}
