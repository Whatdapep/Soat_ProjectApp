import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-stopped',
  templateUrl: './stopped.page.html',
  styleUrls: ['./stopped.page.scss'],
})
export class StoppedPage implements OnInit {
  membership_no:any='';
  url:any='';
check:any='';
  constructor(
    private router:Router,
    private storage:Storage,
    private network:Network,
    private loadingController:LoadingController

  ) {
    
    this.Maintain();

    
   }

  ngOnInit() {
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      duration: 2800,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  Refresh(){

    this.Maintain();
    this.presentLoadingWithOptions();
  }
  Maintain(){
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
  
  setTimeout(()=>{   
    this.router.navigate(['/checklogin']);
   
 },3000);

});
      
   
    
    // stop connect watch
    connectSubscription.unsubscribe();

  }


}
