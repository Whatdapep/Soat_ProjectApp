import { Injectable } from '@angular/core';
import { NavController,LoadingController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
// import {ServicesService} from './services.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
id:any='';
  constructor(

    public navCtrl: NavController , 
    public router:Router, 
    public alertController : AlertController,
    public loadingController: LoadingController,
    private storage:Storage
    // private services:ServicesService
  ) { }


  async Loginfalse() {
    const alert = await this.alertController.create({
      header: 'Error',
      // subHeader: 'Subtitle',
      message: 'Please Enter Username and Password Correctly',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  async LoginComplete(member_name) {
    const alert = await this.alertController.create({
      header: 'สำเร็จ!',
      // subHeader: 'Subtitle',
      message: 'สวัสดียินดีต้อนรับคุณ ' + member_name,
      buttons: ['OK']
    });
    setTimeout(()=>{  this.router.navigate(['/footer']);
   },2000);
    await alert.present();
  }
  async Change_password_Complete(new_password) {
    const alert = await this.alertController.create({
      header: 'สำเร็จ!',
      // subHeader: 'Subtitle',
      message: 'คุณเปลี่ยนรหัสผ่านสำเร็จ รหัสผ่านของคุณคือ'+new_password,
      buttons: ['OK']
    });
    setTimeout(()=>{  this.router.navigate(['/footer/footer/profile']);
   },500);
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
  passcodecheck(id:string){
    this.storage.set('passcode',id);
  console.log('set passcode is '+id)
  }
  async passcodeComplete(id:string) {
    const alert = await this.alertController.create({
      header: 'สำเร็จ!',
      // subHeader: 'Subtitle',
      message: 'รหัสผ่านถูกต้อง',
      buttons: [{
        text:'ตกลง',
        handler: data => {
          if(id == 'checked'){
            this.router.navigate(['/footer/footer/home']);
          }else{
            // var passcode = "menuchecked";
            this.router.navigate(['/footer/footer/menu']);
            // this.storage.set('authmenu',passcode);
            // console.log(passcode)
            


          }
          
        }
      }]
    });
    setTimeout(()=>{  
      // this.router.navigate(['/footer/footer/menu']);
   },700);
    await alert.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      duration: 250,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  

  


  getmembership_no(item,index) {
    var fullname = [item.membership_no];
    return fullname;
  }
  getname_login(item,index) {
    var fullname = [item.name];
    return fullname;
  }
  getmem_id(item,index) {
    var fullname = [item.mem_id];
    return fullname;
  }
  getmem_password(item,index) {
    var fullname = [item.mem_password];
    return fullname;
  }
  gettoken(item,index) {
    var fullname = [item.token];
    return fullname;
  }


//--------------------- ws_mem_status 
  getsharestock(item2,name){
      var item = item
      var results = [item2.share_stock];
      return results;
    }

    
   getname(item,index) {
      var fullname = [item.member_name];
      return fullname;
    }
    
    getnametoken(item,index) {
      var fullname = [item.results.member_name];
      return fullname;
    }
    
   getsurname(item,index) {
      var fullname = [item.member_surname];
      return fullname;
    }
    
   getdateborn(item2,index) {
      var fullname = [item2.date_of_birth];
      return fullname;
      
    }
     getapprove(item,index) {
      var fullname = [item.approve_date];
      return fullname;
    }
    
    getid_card(item,index) {
      var fullname = [item.id_card];
      return fullname;
    }
    
     getgroupname(item,index) {
      var fullname = [item.member_group_name];
      return fullname;
    }
    getposition(item,index) {
      var fullname = [item.position_name];
      return fullname;
    }
    getaddress_present(item,index) {
      var fullname = [item.address_present];
      return fullname;
    }



    // -----------------------LOAN 
    getloan_contract_no(item,index) {
      var fullname = [item.loan_contract_no];
      return fullname;
    }
    getprincipal_balance(item,index) {
      var fullname = [item.principal_balance];
      return fullname;
    }
    getloan_type_description(item,index) {
      var fullname = [item.loan_type_description];
      return fullname;
    }
    getloan_approve_amount(item,index) {
      var fullname = [item.loan_approve_amount];
      return fullname;
    }


// -------- www_data Map
getNote(item,index) {
  var fullname = [item.Note];
  return fullname;
}
getnphoto(item,index) {
  var fullname = [item.nphoto];
  return fullname;
}
// ---------------------
getreceive_month_fp(item,index) {
  var fullname = [item.receive_month_fp];
  return fullname;
}
getmoney_amount(item,index) {
  var fullname = [item.money_amount];
  return fullname;
}


    // ----------------------------
    validate_change_password(old_password,new_password,confirm_password)
    {
       if(old_password == ""){alert('กรุณาระบุรหัสผ่านเดิม !');  return false ;}
       if(new_password == ""){alert('กรุณาระบุรหัสผ่านใหม่ !');  return false ;}
       if(confirm_password != new_password){alert('กรุณายืนยันรหัสผ่านใหม่ให้ถูกต้อง !');  return false ;}
       if(old_password == new_password || old_password == confirm_password){alert('ไม่สามารถระบุรหัสเดิมซ้ำ !'); return false ;}
       else{
         return true;
        }
    }

  }
// }
