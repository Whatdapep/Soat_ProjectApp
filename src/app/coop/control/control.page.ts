import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

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
    private router:Router


  ) {
    if(this.form){
      
    
    }
   }

  ngOnInit() {
  }

  ok(){

    this.storage.remove('url');

    if(this.url != null){
    this.storage.set('url',this.url);
    console.log('set Url is '+this.url)
  }
    this.router.navigate(['/checklogin']);

  }
}
