import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor() { }
  Cprofile(){
    console.log("Hello this is Profiel ");
}
Cmenu(){
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
