import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { EmailComposer } from '@ionic-native/email-composer/ngx';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
My_images:any='';
  constructor( 
    private iab: InAppBrowser,
    private camera:Camera,
    private Email:EmailComposer
    
    ) {
      

   }
  facebook(){
 this.iab.create(`https://facebook.com/สหกรณ์ออมทรัพย์กองทัพภาคที่-3-จำกัด-202554849848894/?__tn__=%2Cd%2CP-R&eid=ARCSMscN_RIB9WdqGC4AlaSzhoEgKfKyCZ-8amudac6a_XdA3t9Jo69Gmx1SgRQ8UgZlXg38Xd5yq97n&_rdc=1&_rdr`,`_system`);
}  
ngOnInit() {
  }

  
  pomcam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):

  // let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.My_images =  imageData;
 }, (err) => {
  // Handle error
 });
    
  }
 
  sendEmail(){

    this.Email.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'pomming1997@gmail.com',
       cc: '',
      //  bcc: ['john@doe.com', 'jane@doe.com'],
       attachments: [
         this.My_images
       ],
       subject: '',
       body: '',
       isHtml: true
     }
     
     // Send a text message using default options
     this.Email.open(email);

  }
}
