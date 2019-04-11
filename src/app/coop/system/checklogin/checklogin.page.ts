import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-checklogin',
  templateUrl: './checklogin.page.html',
  styleUrls: ['./checklogin.page.scss'],
})
export class CheckloginPage implements OnInit {
  membership_no:any='';
  constructor(
    public router:Router, 
    private storage: Storage,) {

      // this.storage.clear();

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


    // this.service.Set_Storage_membership_no(members);
    // this.service.Set_Storage_member_key(this.password);
    // this.storage.set('member_name',this.member_name);

}

  });
}
  ngOnInit() {
  }

}
