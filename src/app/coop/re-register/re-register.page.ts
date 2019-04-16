import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicesService } from '../system/services.service';

@Component({
  selector: 'app-re-register',
  templateUrl: './re-register.page.html',
  styleUrls: ['./re-register.page.scss'],
})
export class ReRegisterPage implements OnInit {
  registerForm:FormGroup;
  error_message={
  'membership_no':[
    {type:'required', Message:'กรุณากรอกเลขทะเบียนให้ครบทั้ง 7 หลัก'},
    {type:'minlength', Message:'กรุณากรอกเลขทะเบียนให้ครบทั้ง 7 หลัก'},
    // {type:'required', Message:'กรุณากรอกเลขทะเบียนให้ครบทั้ง 7 ตัว'},
    // {type:'required', Message:'กรุณากรอกเลขทะเบียนให้ครบทั้ง 7 ตัว'},
],
'member_id':[
  {type:'required', Message:'กรุณากรอกเลขบัตรประชาชนให้ครบทั้ง 13 หลัก'},
  {type:'minlength', Message:'กรุณากรอกเลขบัตรประชาชนให้ครบทั้ง 13 หลัก'},

],
'name':[
  {type:'required', Message:'กรุณากรอกชื่อจริง'},
  // {type:'minlength', Message:'กรุณากรอกเลขบัตรประชาชนให้ครบทั้ง 13 หลัก'},

],
'surname':[
  {type:'required', Message:'กรุณากรอกนามสกุล'},
  // {type:'minlength', Message:'กรุณากรอกเลขบัตรประชาชนให้ครบทั้ง 13 หลัก'},

],
'password':[
  {type:'required', Message:'กรุณากรอกรหัสผ่านไม่น้อยกว่า 3 ตัวอักษร'},
  {type:'minlength', Message:'กรุณากรอกรหัสผ่านไม่น้อยกว่า 3 ตัวอักษร'},

],
'confirm_password':[
  {type:'required', Message:'กรุณากรอกรหัสผ่านไม่น้อยกว่า 3 ตัวอักษร'},
  {type:'minlength', Message:'กรุณากรอกรหัสผ่านไม่น้อยกว่า 3 ตัวอักษร'},

]
}
  constructor(
    private formBuilder:FormBuilder,
    public navCtrl: NavController , 
    public router:Router, 
    public alertController : AlertController,
    private service:ServicesService
  ) {
    this.registerForm = this.formBuilder.group({
  
      membership_no: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        // Validators.pattern('^[0-9]')
      ])),
      member_id: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(13),
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100)
        // Validators.pattern('^[0-9]')
      ])),
      surname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100)
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        // Validators.pattern('^[0-9]')
      ])),
      confirm_password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    
      // [a-zA-Z_ก-ฮะ-์]\w*
        
    
    
    
     });
   }
   async LoginComplete() {
    const alert = await this.alertController.create({
      header: 'สำเร็จ!',
      // subHeader: 'Subtitle',
      message: 'ขอบคุณที่ทำแบบฟอร์ม ขณะนี้แบบฟอร์มอยู่ในระบบ พัฒนา',
      buttons: ['OK']
    });
    setTimeout(()=>{  this.router.navigate(['/logon']);
   },3000);
    await alert.present();
  }
   register(){
    this.LoginComplete();
   }
  ngOnInit() {
  }

}
