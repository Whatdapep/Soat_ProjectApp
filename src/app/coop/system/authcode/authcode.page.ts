import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authcode',
  templateUrl: './authcode.page.html',
  styleUrls: ['./authcode.page.scss'],
})
export class AuthcodePage implements OnInit {
  push=new Array;
  passcode:any=new Array;
  

  constructor() {
    
   }

  ngOnInit() {
  }
  one(){
    this.passcode = this.passcode +1;
  }
  two(){
    this.passcode = this.passcode +2;
  }
  three(){
    this.passcode = this.passcode +3;
  }
  four(){
    this.passcode = this.passcode +4;
  }
  five(){
    this.passcode = this.passcode +5;
  }
  six(){
    this.passcode = this.passcode +6;
  }
  seven(){
    this.passcode = this.passcode +7;
  }
  eight(){
    this.passcode = this.passcode +8;
  }
  ninth(){
    this.passcode = this.passcode +9;
  }
  zero(){
    this.passcode = this.passcode +0;
  }
  del(){
    var len = this.passcode.length;
    var find = this.passcode[len-1];
    // this.passcode[len-1] = 1;
    // var res = this.passcode.substr(len, 1);
    // this.passcode = this.passcode +3;
    console.log(find);
    console.log(this.passcode[len-1]);


  }

}
