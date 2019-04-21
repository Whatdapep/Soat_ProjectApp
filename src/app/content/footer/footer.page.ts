import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ComAuthcodeComponent } from 'src/app/coop/system/com-authcode/com-authcode.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor(
    private router:Router,
    public modalController: ModalController
    
    ) { }

    async presentModal() {
      const modal = await this.modalController.create({
        component: ComAuthcodeComponent,
        componentProps: { value: 123 }
      });
      return await modal.present();
    }
  Cprofile(){
    console.log("Hello this is Profiel ");
}
Cmenu(){
  
  // this.router.navigate(['/authcode/check'])
  console.log("Hello this is menu ");
}
Cindex(){
  console.log("Hello this is index ");
}
go(){
  console.log("i just Click it");
}

  ngOnInit() {
  }

}
