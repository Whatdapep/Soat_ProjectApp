import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor(private router:Router) { }
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
