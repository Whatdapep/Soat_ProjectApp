import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-stopped',
  templateUrl: './stopped.page.html',
  styleUrls: ['./stopped.page.scss'],
})
export class StoppedPage implements OnInit {
check:any='';
  constructor(
    private router:Router,
    private storage:Storage

  ) {

    this.storage.get('authmenu').then((val) => {
      this.check = val.toString();
    console.log("this is get authmenu"+this.check);
      if(this.check == "menuchecked"){
       this.router.navigate(['/footer/footer/menu']);
      }else{
          this.router.navigate(['/authcode/mchecked']);
         
      }
    });

   }

  ngOnInit() {
  }

}
