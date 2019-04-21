import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
// import { AuthcodePage } from '../system/authcode/authcode.page';
import { ComAuthcodeComponent } from '../system/com-authcode/com-authcode.component';
// import { AuthcodePage } from '../system/authcode/authcode.page';
@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {
  url:string='';

  public form = [
    { val: 'cooparmy3.com', isChecked: false },
    { val: 'localhost', isChecked: false },
    { val: 'localhost:4000', isChecked: false },
    { val: 'localhost:4500', isChecked: false }
  ];
  
  constructor(
    private storage:Storage,
    private router:Router,
    public modalController: ModalController


  ) {
    if(this.form){
      
    
    }
   }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ComAuthcodeComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  ok(){

    this.storage.remove('url');

    if(this.url != null){
    this.storage.set('url',this.url);
    console.log('set Url is '+this.url)
  }
    this.router.navigate(['/checklogin']);

  }
  auth(){
    this.presentModal()
  }
}
