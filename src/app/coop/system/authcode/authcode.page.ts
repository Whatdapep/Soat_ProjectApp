import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router,RouterModule, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {ServicesService} from '../services.service';
import { FingerprintAIO ,FingerprintOptions} from '@ionic-native/fingerprint-aio/ngx';



@Component({
  selector: 'app-authcode',
  templateUrl: './authcode.page.html',
  styleUrls: ['./authcode.page.scss'],
})
export class AuthcodePage implements OnInit {
  // push=new Array;
  passcode:any=new Array;
  passcodestorage='654321';
  shake:boolean=false;
  main:boolean=true;
  falsecount:number=0;  
check:any='';
fingerprintOptions : FingerprintOptions;
  constructor(

    public alertController : AlertController,
    public toastController: ToastController,
    public router:Router,
    private service:ServicesService,
    private fingeraio:FingerprintAIO,
private activatedRoute:ActivatedRoute,
    private storage: Storage,
  )
  {
    this.finger();

    // this.storage.get('authmenu').then((val) => {
    //   this.passcode = val;
    //   if(this.passcode == 'menuchecked'){
    //   this.router.navigate(['/footer/footer/menu']);

    //   }else{
        
    //   }
    //   console.log("the passcode is"+this.passcode);

    // });

 
   
   }

   keep(){
    this.main=true;
    this.shake=false;
    if(this.passcode.length < 6){
      console.log(this.passcode.length);
    }else{
      if(this.passcode.length == 6){
      var result = this.passcode.toString();

        if(result == this.passcodestorage){
           
          // this.storage.set('passcode',result);
          // console.log('set passcode is '+result)
          this.service.callfunction.passcodecheck(this.check);

          this.service.callfunction.passcodeComplete(this.check);
          this.passcode = '';
          // this.router.navigate(['/footer/footer/menu']);



        }else{ 
          this.falsecount++;
          // this.Loginfalse();
          this.passcode = '';
          this.falsepasscode();
          // setTimeout(()=>{ 
            this.shake=true;
            this.main=false;
           

        // },500);

        
        }
        console.log(result)
        console.log("you are push6")
      }else{
        this.Loginfalse()
     
      }
    }
  
   }
   async Loginfalse() {
    const alert = await this.alertController.create({
      header: 'Error',
      // subHeader: 'Subtitle',
      message: 'Please Enter Username and Password Correctly',
      buttons: ['OK']
    });
  
    await alert.present();
  }



  async falsepasscode() {
    const toast = await this.toastController.create({
      message: 'กรุณากรอกรหัสให้ถูกต้อง ครั้งทึ่ '+this.falsecount,
      duration: 2000
    });
    toast.present();
  }


//02-8888888
  ngOnInit() {

    this.check = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("the check id is "+this.check);
  }
  one(){
    this.passcode = this.passcode +1;
    this.keep();
  }
  two(){
    this.passcode = this.passcode +2;
    this.keep();
  }
  three(){
    this.passcode = this.passcode +3;
    this.keep();
  }
  four(){
    this.passcode = this.passcode +4;
    this.keep();
  }
  five(){
    this.passcode = this.passcode +5;
    this.keep();
  }
  six(){
    this.passcode = this.passcode +6;
    this.keep();
  }
  seven(){
    this.passcode = this.passcode +7;
    this.keep();
  }
  eight(){
    this.passcode = this.passcode +8;
    this.keep();
  }
  ninth(){
    this.passcode = this.passcode +9;
    this.keep();  
  }
  zero(){
    this.passcode = this.passcode +0;
    this.keep();
  }
  del(){
    var len = this.passcode.length;
    var find = this.passcode[len-1];
    // var push = new Array;
    // push[len-1]=find;
    // console.log(push);
    // this.passcode[len-1] = 1;
    // var res = this.passcode.substr(len, 1);
    // this.passcode = this.passcode +3;
    this.passcode = '';
    delete(this.passcode[len-1]);
    console.log(find);
    console.log(this.passcode[len-1]);


  }
  finger(){


this.fingeraio.show({
  clientId: 'Fingerprint-Demo',
  clientSecret: 'password', //Only necessary for Android
  disableBackup:true,  //Only for Android(optional)
  localizedFallbackTitle: 'Use Pin', //Only for iOS
  localizedReason: 'Please authenticate' //Only for iOS
})
.then((result: any) => { 

  // this.storage.set('passcode',result);
  // console.log('set passcode is '+result)
  this.service.callfunction.passcodecheck(this.check);

  this.service.callfunction.passcodeComplete(this.check)
})
.catch((error: any) => alert(error));

  }

}
