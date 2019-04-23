import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor( private iab: InAppBrowser) { }
  facebook(){
 this.iab.create(`https://facebook.com/สหกรณ์ออมทรัพย์กองทัพภาคที่-3-จำกัด-202554849848894/?__tn__=%2Cd%2CP-R&eid=ARCSMscN_RIB9WdqGC4AlaSzhoEgKfKyCZ-8amudac6a_XdA3t9Jo69Gmx1SgRQ8UgZlXg38Xd5yq97n&_rdc=1&_rdr`,`_system`);
}  
ngOnInit() {
  }

}
