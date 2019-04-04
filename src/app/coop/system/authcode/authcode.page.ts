import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-authcode',
  templateUrl: './authcode.page.html',
  styleUrls: ['./authcode.page.scss'],
})
export class AuthcodePage implements OnInit {
  // push=new Array;
  passcode:any=new Array;
  passcodestorage='654321';

  

  constructor(

    public alertController : AlertController,
  )
  {

 
   
   }

   keep(){
    if(this.passcode.length < 6){
      console.log(this.passcode.length);
    }else{
      if(this.passcode.length == 6){
      var result = this.passcode.toString();

        if(result == this.passcodestorage){
          this.LoginComplete();
        }else{
          this.Loginfalse();
          this.passcode = '';
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

  async LoginComplete() {
    const alert = await this.alertController.create({
      header: 'สำเร็จ!',
      // subHeader: 'Subtitle',
      message: 'สวัสดียินดีต้อนรับคุณ ',
      buttons: ['OK']
    });
    setTimeout(()=>{  
      // this.router.navigate(['/footer']);
   },2000);
    await alert.present();
  }

  ngOnInit() {
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

}
